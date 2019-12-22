import React, { Component } from "react";

class CityList extends Component {
  rendelist () {
    return (
      <div className="cities">
      { this.props.cities.map((city =>
        return <p> {city.name} </p>
        ))}
      </div>
 )
}

 export default CityList;
