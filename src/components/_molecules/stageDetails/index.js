import "./stageDetails.css"

function StageDetails({stage, detailsRef}) {

    let formatDate = new Date(stage.date);
    formatDate = formatDate.toLocaleDateString("fr-FR", {
        month: "long",
        year: "numeric",
        day: "2-digit"
    })

    return (
        <aside  className="stage-details">
            <h3> Détails d'une étape</h3>
            {stage === false ?
                (<p> Cliquez sur une étape pour afficher les détails</p>) : (
                    <ul ref={detailsRef} id="details">
                        <li>
                            Numéro : <b>{stage.stageName}</b>
                        </li>
                        <li>
                            Date : {formatDate}
                            <hr/>
                        </li>
                        <li>Départ : {stage.start}</li>
                        <li>
                            Arrivée : {stage.finish}
                            <hr/>
                        </li>
                        <li>Dénivelé : {stage.elevationGain}m</li>
                        <li>Kilomètres : {stage.distanceKm}km</li>
                    </ul>
                )}
        < /aside>
    );
}
export default StageDetails