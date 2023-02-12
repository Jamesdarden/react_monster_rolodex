import { type } from 'os';
import React, { ChangeEventHandler , ChangeEvent} from 'react'

import './searchbox.styles.css'

// const name: string = 1234;

// interface ISearchBoxProps {
//   className:string;
//   placeholder?:string;

// }

// interface ISearchBoxProps {
//   onChangeHandler: (a: string) => void
// }

type SearchBoxProps = {
  className: string;
  placeholder?:string;
  // typed generics
  // onChangeHandler:ChangeEventHandler<HTMLInputElement>;
  onChangeHandler: (event:ChangeEvent<HTMLInputElement>) => void
}

// export default class SearchBox extends Component {
//   render() {
//     return (
//       <input
//         className={`search-box ${this.props.className}`}
//         type="search"
//         placeholder={this.props.placeholder}
//         onChange={this.props.onChangeHandeler}
//       />
//     )
//   }
// }



const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => {
  return(
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />)
}

export default SearchBox