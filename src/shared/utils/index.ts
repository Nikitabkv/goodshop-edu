import {KeyboardEvent} from "react";

export const enterClickHandler = (e: KeyboardEvent<HTMLDivElement>, callback: (e: KeyboardEvent<HTMLDivElement>) => void) => {
  if (e.key === 'Enter') {
    callback(e)
  }
}
