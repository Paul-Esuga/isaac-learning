// import CloseIcon from '../../../assets/images/Close.png';

// type EditBioProps = {
//     setShowEditBio: () => void
// }

// const EditBioPopup = ({ setShowEditBio }: EditBioProps ) => {
//     return (
//         <div className="shadow-2xl backdrop-blur-xs h-screen w-screen absolute top-[-100px]  left-0 flex items-center justify-center">

//             <div className='bg-[#fff] p-[24px] w-[500px] rounded-[20px]'>

//                 <div className='flex items-center justify-between mb-[24px]'>
//                     <h1 className='text-[#414d58] text-[20px] font-[700]'>Edit bio</h1>
//                     <img src={CloseIcon} alt='close icon' onClick={setShowEditBio} className='cursor-pointer'/>
//                 </div>

//                 <div className=''>
//                     <textarea
//                         value="Aspiring HR professional, passionate about people, learning, and workplace impact. Exploring the future of HR one course at a time"
//                         className='border-[1px] rounded-[10px] px-[16px] py-[13px] w-[100%] h-[120px] resize-none text-[15px] text-[#1a1a1a] font-[400]' />
//                 </div>

//             </div>

//         </div>
//     )
// }

// export default EditBioPopup;

import { useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import CloseIcon from '../../../assets/images/Close.png';

type EditBioProps = {
  setShowEditBio: () => void;
};

const EditBioPopup = ({ setShowEditBio }: EditBioProps) => {
  const { user, isLoaded } = useUser();
  const [isSaving, setIsSaving] = useState(false);

  // 1. Initialize state with existing metadata or an empty string
  const [bio, setBio] = useState<string>(
    (user?.unsafeMetadata?.bio as string) || ""
  );

  const handleSaveBio = async () => {
    if (!user) return;

    try {
      setIsSaving(true);
      
      // 2. Update the metadata on Clerk's servers
      await user.update({
        unsafeMetadata: {
          bio: bio,
        },
      });

      // 3. IMPORTANT: Reload the user object to refresh the local cache
      // This ensures the Profile page sees the new bio immediately.
      await user.reload();
      
      setShowEditBio(); // Close the popup
    } catch (error) {
      console.error("Error saving bio:", error);
      alert("Failed to update bio. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  if (!isLoaded) return null;

  return (
    <div className="fixed inset-0 z-50 shadow-2xl backdrop-blur-sm bg-black/20 flex items-center justify-center">
      <div className="bg-[#fff] p-[24px] w-[90%] max-w-[500px] rounded-[20px] relative">
        <div className="flex items-center justify-between mb-[24px]">
          <h1 className="text-[#414d58] text-[20px] font-[700]">Edit bio</h1>
          <img
            src={CloseIcon}
            alt="close icon"
            onClick={setShowEditBio}
            className="cursor-pointer hover:opacity-70 transition-opacity"
          />
        </div>

        <div className="mb-6">
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Describe yourself..."
            className="border-[1px] border-gray-200 rounded-[10px] px-[16px] py-[13px] w-[100%] h-[120px] resize-none text-[15px] text-[#1a1a1a] font-[400] focus:border-primary-green focus:ring-1 focus:ring-primary-green outline-none transition-all"
          />
        </div>

        <div className="flex gap-3">
            <button
              onClick={setShowEditBio}
              className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-200 transition-all"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveBio}
              disabled={isSaving}
              className="flex-1 bg-primary-green text-white py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all disabled:opacity-50 flex items-center justify-center"
            >
              {isSaving ? "Saving..." : "Save Changes"}
            </button>
        </div>
      </div>
    </div>
  );
};

export default EditBioPopup;