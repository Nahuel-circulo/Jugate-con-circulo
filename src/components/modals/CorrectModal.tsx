import { useEffect } from "react";
import { useGameStore } from "../../store/gameStore";
import { useModalStore } from "../../store/modalStore";
import StarsContainer from "../StarsContainer";

const MESSAGES = [
  'Conseguiste tu primer estrella',
  'Conseguiste tu segunda estrella',
  'Conseguiste tu tercera estrella',
  'Conseguiste tu cuarta estrella',
  'Conseguiste tu quinta estrella',
]

const CorrectModal = () => {

  const setCorrectModal = useModalStore(state => state.setCorrectModal)
  const incrementLevel = useGameStore(state => state.incrementLevel)
  const resetSelectedCirculeros = useGameStore(state => state.resetSelectedCirculeros)
  const level = useGameStore(state => state.stage)
  
  useEffect(() => {
    const nextLevel = () => {
      setCorrectModal(false)
      incrementLevel()
      resetSelectedCirculeros()
    }
    setTimeout(()=>{
      nextLevel()
    },3000)
  }, []);

  return (
    <div className="flex flex-col items-center justify-start gap-6 md:justify-center">

      <StarsContainer quantity={level + 1} />
      <img src={`/images/levels/level-${level + 1}.svg`} className="my-4" alt="congratulations" />
      <p className="mb-5 text-xl font-semibold text-white">{MESSAGES[level]}</p>
      {
        (level + 1) === 3 &&

        <div className="origin-top-left rotate-[-6.45deg] w-[198.08px] h-[44.90px] relative">
          <div className="w-[198.08px] h-[44.90px] left-0 top-0 absolute origin-top-left rotate-[-6.45deg] bg-cyan-400" />
          <div className="w-[185.11px] h-[23.95px] left-[6.63px] top-[9.79px] absolute origin-top-left rotate-[-6.45deg] text-center text-zinc-900 text-xl font-bold font-['Rubik']">#SegundoFrancia</div>
        </div>
      }
      {/* <button className="px-6 py-2 mx-auto font-bold rounded-full bg-c-yellow" onClick={nextLevel}>Continuar</button> */}
    </div>
  );
}

export default CorrectModal;
