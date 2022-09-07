import React from "react";

export default function SearchBar(props) {
  return <input className="search" type="text" onChange={props.onChange} />;
}
