import express from "express";
import { Webhook } from "svix";
import prisma from "../lib/prisma.js";
import { type WebhookEvent } from "@clerk/clerk-sdk-node";

const router = express.Router();

router.post(
  "/api/webhooks/user",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    console.log("------- WEBHOOK ATTEMPT DETECTED -------");

    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

    if (!WEBHOOK_SECRET) {
      console.error("❌ Webhook secret not found in ENV");
      return res.status(500).json({ error: "Missing webhook secret" });
    }

    const svixHeaders = {
      "svix-id": req.headers["svix-id"] as string,
      "svix-timestamp": req.headers["svix-timestamp"] as string,
      "svix-signature": req.headers["svix-signature"] as string,
    };

    if (
      !svixHeaders["svix-id"] ||
      !svixHeaders["svix-timestamp"] ||
      !svixHeaders["svix-signature"]
    ) {
      console.error("❌ Missing Svix headers");
      return res.status(400).json({ error: "Missing svix headers" });
    }

    const payload = req.body.toString();
    const wh = new Webhook(WEBHOOK_SECRET);

    let evt: WebhookEvent;

    try {
      evt = wh.verify(payload, svixHeaders) as WebhookEvent;
      console.log("✅ Webhook verified");
    } catch (err) {
      console.error("❌ Verification failed:", err);
      return res.status(400).json({ error: "Invalid signature" });
    }

    const eventType = evt.type;

    if (eventType === "user.created") {
      const userData = evt.data as any; // Using 'any' briefly to bypass strict Clerk types for the example

      // Safely grab the email from the array
      const email = userData.email_addresses?.[0]?.email_address;
      const clerkId = userData.id;

      console.log(`Debug: Received Email: ${email}, ID: ${clerkId}`);

      if (!email || !clerkId) {
        console.error(
          "❌ Missing required user data in webhook. Data received:",
          JSON.stringify(userData, null, 2)
        );
        return res.status(400).json({ error: "Incomplete user data" });
      }

      try {
        await prisma.user.create({
          data: {
            email: email,
            fullName:
              `${userData.first_name ?? ""} ${
                userData.last_name ?? ""
              }`.trim() || "Anonymous User",
            clerkId: clerkId,
          },
        });
        console.log(`✅ User ${clerkId} successfully synced to DB`);
      } catch (dbError) {
        console.error("❌ Prisma Error:", dbError);
        return res.status(500).json({ error: "DB Sync Error" });
      }
    }

    return res.status(200).json({ success: true });
  }
);

export default router;
