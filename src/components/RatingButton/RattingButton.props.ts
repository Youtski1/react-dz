import type { Dispatch, SetStateAction } from "react";

export interface RattingButtonProps {
    grade: number,
    setGrade: Dispatch<SetStateAction<number>>
}