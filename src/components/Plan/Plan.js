import './styles.css'

export default function Plan({ planData, isSelected, onClick }) {

	const onPlanSelection = (id) => {
		onClick(id)
	}


  return (
    <>
      <div className={`plan-card ${isSelected && 'selected-plan-card' } `} onClick={() => onPlanSelection(planData.id)}>
        <div className= 'flex-col plan-card-content '>
          <span>{planData.title}</span>
          <span>{planData.price}</span>
        </div>
      </div>
    </>
  );
}