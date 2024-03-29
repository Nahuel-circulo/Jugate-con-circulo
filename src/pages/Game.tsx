import { useEffect, useState } from "react";
import { useSensor, MouseSensor, TouchSensor, useSensors, DragEndEvent, DndContext, closestCenter } from '@dnd-kit/core';
import { Droppable } from "../components/DragAndDrop/Droppable";
import { Draggable } from "../components/DragAndDrop/Draggable";
import CirculeroCard from "../components/CirculeroCard";
import { useModalStore } from "../store/modalStore";
import { useGameStore } from "../store/gameStore";
import { useRandomCirculeros } from "../hooks/useRandomCirculeros";
import { useVerifyAnswer } from "../hooks/useVerifyAnswer";
import { useTutorialModal } from "../hooks/useTutorialModal";

import { Circulero } from '../data/circuleros';
import useTransition from "../hooks/useTransition";


export interface CirculerosState {
  firstCirculero: Circulero | null,
  secondCirculero: Circulero | null
}

const Game = () => {

  useTutorialModal()

  const { handletransition } = useTransition()

  const setErrorModal = useModalStore((state) => (state.setErrorModal))

  const setCorrectModal = useModalStore((state) => state.setCorrectModal)

  const stage = useGameStore((state) => (state.stage))

  const addPartner = useGameStore((state) => (state.addPartner))

  const question = useGameStore((state) => (state.currentQuestion))

  const [circuleros, setCirculeros] = useState<Array<Circulero>>()

  const { hasError, resetErrors } = useVerifyAnswer(question)


  useEffect(() => {
    const { circuleros: circuleros20 } = useRandomCirculeros(stage)

    setCirculeros(circuleros20)
  }, [stage])

  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);

  const sensors = useSensors(
    mouseSensor,
    touchSensor,
  );

  const drawEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    const circuleroToAdd = circuleros!.filter(item => item.id.toString() === active.id)[0]

    if (over?.id === 'first') {
      addCirculero('first', circuleroToAdd)
    }
    if (over?.id === 'second') {
      addCirculero('second', circuleroToAdd)
    }
  }

  const setCanPass = useGameStore(state => state.setCanPass)
  const increaseAttemps = useGameStore(state => state.increaseAttemps)

  const firstSelectedCirculero = useGameStore(state => state.firstSelectedCirculero)
  const secondSelectedCirculero = useGameStore(state => state.secondSelectedCirculero)

  const setFirstSelectedCirculero = useGameStore((state) => (state.setFirstSelectedCirculero))
  const setSecondSelectedCirculero = useGameStore((state) => (state.setSecondSelectedCirculero))

  const addCirculero = (position: string, circulero: Circulero) => {
    if (position == 'first') {
      setFirstSelectedCirculero(circulero)
    }
    if (position == 'second') {
      setSecondSelectedCirculero(circulero)
    }
  }

  const comprobar = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    if (hasError) {
      increaseAttemps()
      setErrorModal(true)
    } else {

      // Agrega al team
      if (question) {
        addPartner(firstSelectedCirculero!, question?.roles[0].buscado)
        addPartner(secondSelectedCirculero!, question?.roles[1].buscado)
      }
      resetErrors()
      if (stage !== 4) {
        setCorrectModal(true)
      } else {
        setCanPass(true)
        handletransition('/congratulations')
      }
    }

  }

  return (
    <section className="relative z-10 flex flex-col bg-[url('/images/backgrounds/montana/front.webp')] bg-fixed bg-bottom bg-contain bg-no-repeat  items-center w-full secure-min-h py-10 lg:pt-24 md:pt-0 " style={{ viewTransitionName: 'view' }}>
      <div className="container px-8 py-4 md:mt-10 lg:mt-4 xl:mt-6 2xl:mt-16">
        <DndContext sensors={sensors} autoScroll={false} collisionDetection={closestCenter} onDragEnd={drawEnd}>

          <div className="grid justify-center max-w-6xl gap-2 mx-auto text-sm xl:pb-0 lg:gap-4 xl:gap-y-12 2xl:pt-4 lg:grid-cols-5">
            <div className=" lg:col-start-1 lg:col-span-2 justify-self-end  self-end w-full  min-h-[150px] max-w-sm   lg:max-w-xs  xl:max-w-sm ">{/* seleccion 1 */}
              <Droppable id="first" >

                {
                  firstSelectedCirculero ?
                    <div className="relative flex items-center justify-center w-full p-4 bg-white h-36 before:w-full before:h-full before:absolute before:bg-c-magenta before:-z-10 before:-left-2 before:top-2 before:shadow-md before:shadow-black">
                      <CirculeroCard circulero={firstSelectedCirculero} rol={question.roles[0].buscado} />
                      <button onClick={()=>setFirstSelectedCirculero(null)} className="absolute top-4 right-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
                          <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                        </svg>
                      </button>
                    </div>
                    :
                    <div className="relative flex items-center justify-center w-full p-4 h-36 bg-c-magenta before:w-full before:h-full before:absolute before:bg-white before:-z-10 before:-left-2 before:top-2 before:shadow-md before:shadow-black">
                      <p className="text-white xl:text-sm 2xl:text-base animate-fade animate-once animate-duration-1000 animate-ease-in-out animate-normal animate-fill-forwards" dangerouslySetInnerHTML={{ __html: question ? question?.roles[0].descripcion : '' }} />
                    </div>
                }
              </Droppable>
            </div>
            <div className="my-4 lg:col-start-3 lg:row-span-2 lg:col-span-3">
              <Droppable id="grid">
                <div className="grid max-w-sm grid-cols-5 gap-2 lg:gap-2 xl:gap-3 2xl:gap-4 lg:max-w-lg xl:max-w-2xl">
                  {circuleros && circuleros.map(item => (
                    <Draggable disabled={item == firstSelectedCirculero || secondSelectedCirculero == item} id={item.id.toString()} key={item.id} circulero={item} />))
                  }
                  <p className="col-span-5 text-center text-c-yellow">Arrastrá un circulover hacia la tarjeta del rol</p>
                </div>
              </Droppable>
            </div>
            <div className=" lg:col-start-1  justify-self-end w-full  lg:col-span-2 relative min-h-[150px] max-w-sm  self-start  lg:max-w-xs  xl:max-w-sm ">{/* seleccion 2 */}
              <Droppable id="second" >
                {
                  secondSelectedCirculero ?
                    <div className="relative flex items-center justify-center w-full p-4 bg-white h-36 before:w-full before:h-full before:absolute before:bg-c-cyan before:-z-10 before:-left-2 before:top-2 before:shadow-md before:shadow-black">
                      <CirculeroCard circulero={secondSelectedCirculero} rol={question.roles[1].buscado} />
                      <button onClick={()=>setSecondSelectedCirculero(null)} className="absolute top-4 right-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
                          <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                        </svg>
                      </button>
                    </div>
                    :
                    <div className="relative flex items-center justify-center w-full p-4 text-black h-36 bg-c-cyan before:w-full before:h-full before:absolute before:bg-white before:-z-10 before:-left-2 before:top-2 before:shadow-md before:shadow-black">
                      <p className="text-sm text-black 2xl:text-base animate-fade animate-once animate-duration-1000 animate-ease-in-out animate-normal animate-fill-forwards" dangerouslySetInnerHTML={{ __html: question ? question?.roles[1].descripcion : '' }} />

                    </div>
                }
              </Droppable>
            </div>
          </div>
        </DndContext>
      </div>
      <button onClick={comprobar} disabled={!firstSelectedCirculero || !secondSelectedCirculero} className="px-6 py-3 mt-4 font-bold rounded-full shadow-md shadow-black lg:mt-0 disabled:bg-gray-300 bg-c-yellow"> Continuar </button>
    </section>
  );
}

export default Game;
