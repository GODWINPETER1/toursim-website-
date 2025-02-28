import React from "react";
import {  useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { toggleTheme } from "../../features/theme/themeSlice";


const ThemeToggle: React.FC = () => {

    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.theme.mode);

    return (
        <button onClick={() => dispatch(toggleTheme())} className="p-2 bg-gray-200 dark:bg-gray-700 rounded">
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode 
        </button>
    )
}
export default ThemeToggle