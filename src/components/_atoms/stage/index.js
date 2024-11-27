import "./stage.css"

function Stage ({stageName, date, start, distanceKm}) {
    let formatDate = new Date(date);
    formatDate = formatDate.toLocaleDateString("fr-FR", {
        month: "long",
        year: "numeric",
        day: "2-digit"
    })
    return (
        <div className="stage">
            <h3> {stageName} le {formatDate}</h3>
            <p> Au départ de {start} </p>
        </div>
    );
}
export default Stage