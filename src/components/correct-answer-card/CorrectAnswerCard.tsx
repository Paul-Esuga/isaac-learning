// Assets
import Close from "../../assets/images/Close.png";

type CorrectAnswerCardProps = {
  correctAnswer: string;
  setShowCorrectAnswer: () => void;
  Nosplit?: boolean;
};

const CorrectAnswerCard = ({
  correctAnswer,
  setShowCorrectAnswer,
  Nosplit,
}: CorrectAnswerCardProps) => {
  return (
    /* CHANGE 1: Use fixed inset-0 to cover the whole viewport.
           Used z-[2000] to ensure it sits above the quiz questions. */
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
      {/* Dark Overlay with Blur */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={setShowCorrectAnswer}
      />

      {/* CHANGE 2: Responsive Modal Body
               Removed fixed w-[400px]. Added max-w-lg and w-full. */}
      <div className="relative shadow-2xl flex flex-col gap-5 bg-white py-6 px-6 md:px-10 rounded-2xl w-full max-w-lg animate-in fade-in zoom-in duration-200">
        <div className="flex justify-between items-start gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-green-600 text-sm md:text-base font-bold uppercase tracking-wide">
              Correct Answer
            </p>
            <h3 className="text-xl md:text-2xl text-[#414d58] font-bold">
              {Nosplit ? correctAnswer : correctAnswer.split("")[0]}
            </h3>
          </div>

          {/* CHANGE 3: Larger hit-area for Close button */}
          <button
            onClick={setShowCorrectAnswer}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <img src={Close} alt="close" className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>

        {!Nosplit && (
          <p className="text-[#414d58] font-semibold text-lg">
            {correctAnswer.split("").slice(3)}
          </p>
        )}

        {/* CHANGE 4: Responsive Text Wrapper
                   Removed fixed w-[400px]. Added break-words. */}
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
          <p className="text-sm md:text-base leading-relaxed text-gray-600 break-words">
            <span className="text-[#414d58] font-bold">Explanation: </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            rem recusandae eius aliquam molestias praesentium placeat
            consectetur consequuntur.
          </p>
        </div>

        {/* Mobile OK Button (Optional but better UX) */}
        <button
          onClick={setShowCorrectAnswer}
          className="md:hidden w-full bg-primary-green text-white py-3 rounded-xl font-bold mt-2"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default CorrectAnswerCard;
