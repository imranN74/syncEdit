import { Logo } from "./Logo";
import { CreateModal } from "./CreateModal";
import { useHandleModal } from "../hooks/handleModal";

export const Hero = () => {
  const { modalState, setModalState } = useHandleModal(false);

  return (
    <div className="h-dvh flex w-dvw flex-col justify-center items-center gap-8">
      <CreateModal visiblity={modalState} />
      <Logo logoStyle="text-2xl font-bold border border-black p-2 rounded-3xl" />
      <div className="text-4xl font-serif text-center">
        A Real Time Text Editor
      </div>
      <div>
        <button
          onClick={() => {
            setModalState(!modalState);
          }}
          className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block"
        >
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-red-500 py-2 px-4 ring-1 ring-white/10 ">
            <span>Create New Pad</span>
            <svg
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
      </div>
    </div>
  );
};
