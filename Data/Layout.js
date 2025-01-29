import { Columns4 } from "lucide-react";
import { Columns3 } from "lucide-react";
import {Columns2, RectangleHorizontal } from "lucide-react";

export default [
    {
        label: "column",
        type: "column",
        numOfColumns: 1,
        icon: RectangleHorizontal
    },
    {
        label: "column 2",
        type: "column-2",
        numOfColumns: 2,
        icon: Columns2
    },
    {
        label: "column 3",
        type: "column-3",
        numOfColumns: 3,
        icon: Columns3
    },
    {
        label: "column 4",
        type: "column-4",
        numOfColumns: 4,
        icon: Columns4
    },
]