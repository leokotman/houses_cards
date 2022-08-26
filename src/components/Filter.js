function Filter(props) {
  return (
    <div className="filter">
        <span>Filter</span>
        <input type="text" aria-label="filter" title="filter" className="filter__input" value={props.value} onChange={props.onChange} />
    </div>
  )
}

export default Filter;