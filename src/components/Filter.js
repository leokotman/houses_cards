function Filter(props) {
  return (
    <div className="filter">
        <label htmlFor="filter" >Filter</label>
        <input type="text" aria-label="filter" title="filter" className="filter__input" value={props.value} onChange={props.onChange} id="filter" />
    </div>
  )
}

export default Filter;