import Stage from "../../_atoms/stage";
import "./stageList.css"

function StageList ({datas, setCurrent, itemRef, drawLine}) {
    return (
        <ul className="stage-list">
            {
                datas.map((stage, index) => (
                    <li ref={itemRef} data-id={"stage-item-" + index} key={index} onClick={()=>{ setCurrent(stage);  drawLine(index);}}>
                        <Stage {...stage}/>
                    </li>
                ))
            }
        </ul>
    );
}

export default StageList