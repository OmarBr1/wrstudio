import './InfoCard.css'


const InfoCard = ({title, descr, icon}) => {
  return (
    <>
    <div className="card-cont">
      <div className="icon-title">
        <div className="icon">{icon}</div>
        <h4>{title}</h4>
      </div>
      <div className="descr-cont">{descr}</div>
    </div>
    </>
  )
}

export default InfoCard