import './App.css';
import Header from "./components/header/header";
import StageList from "./components/_molecules/stageList";
import {tourDeFrance2024} from "./data/stage";
import StageDetails from "./components/_molecules/stageDetails";
import {useEffect, useRef, useState} from "react";
import SearchFilter from "./components/_molecules/searchFilter";
import LeaderLine from "leader-line-new";

let currentLine = null;

function App() {
    const [currentStage, setCurrentStage] = useState(false)
    const [result, setResult] = useState(null)
    const itemRef = useRef(null);
    const detailsRef = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const drawLine = (index) => {

        if (currentStage ) {
            const startElement = document.querySelector(`[data-id="stage-item-${index}"]`);
            const endElement = document.querySelector('#details');
            if (startElement && endElement) {

                clearLine();

                currentLine = new LeaderLine(startElement, endElement, {
                    color: "rgb(255, 203, 108)",
                    dash: { animation: true },
                    path: "fluid",
                    hide: true
                });
                currentLine.show("draw");
            }
        }
    };

    const handleScroll = () => {
        if (currentLine) {
            currentLine.position();
        }
    };

    const clearLine = () => {
        if (currentLine) {
            currentLine.hide('draw', {
                complete: () => {
                    currentLine.remove();
                    currentLine = null;
                }
            });
        }
    };

    return (
        <div className="App">
            <Header title="Tour de la France 2024"/>

            <SearchFilter setResult={(data) => {clearLine(); setResult(data); }}/>

            <section className="stages">

                {
                    result && result.length > 0 ? (
                        <StageList datas={result} setCurrent={setCurrentStage} itemRef={itemRef} drawLine={drawLine}/>
                    ) : result && result.length === 0 ? (
                        <p> Cette ville ne participe pas à la tour de France 2024</p>
                    ) : (
                        <StageList datas={tourDeFrance2024} setCurrent={setCurrentStage} itemRef={itemRef} drawLine={drawLine}/>
                    )
                }

                <StageDetails stage={currentStage} detailsRef={detailsRef}/>
            </section>
        </div>
    );
}

export default App;
