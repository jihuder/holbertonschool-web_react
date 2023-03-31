import { RowID, RowElement } from "./interface";

declare let insertRow: (row: RowElement) => number;
declare let deleteRow: (rowId: RowID) => void;
declare let updateRow: (rowId: RowID, row: RowElement) => RowID;
