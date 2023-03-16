import React, {ChangeEvent, MouseEvent} from "react";

// const callback = (): number => {
//     // alert('hey')
//     return 12;
// }
//
// window.setTimeout(callback, 1000)

export const User = () => {

    const search = (event:MouseEvent<HTMLButtonElement>) => {

        alert(event.currentTarget.name)
    }
    // const deleteUser = (event:MouseEvent<HTMLButtonElement>) => {
    //
    //     alert(event.currentTarget.name)
    // }
    // const saveUser = () => {
    //     alert('user have been save')
    // }
    const onNameChanged = () => {
        console.log('name changed')
    }
    const onAgeChanged = (event:ChangeEvent<HTMLInputElement>) => {
        console.log('age changed' + event.currentTarget.value)
    }
    const focusLostHandler = () => {
        console.log('focus lost')
    }
    return (
        <div><textarea
            onChange={onNameChanged}
            onBlur={onNameChanged}>Dimych</textarea>
            <input onChange={onAgeChanged} type={"number"}/>

            <button name={"search"} onClick={search}>search</button>
            {/*<button name={"delete"} onClick={deleteUser}>delete</button>*/}
            {/*<button name={"save"} onClick={saveUser}>save</button>*/}
        </div>
    )
}