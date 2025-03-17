import { clsx, type ClassValue } from "clsx"
import { NextResponse } from "next/server";
import { twMerge } from "tailwind-merge"
import { CRUDEnum } from "./enum/crud.enum";
import { HttpMessageEnum } from "./enum/httpMessage.enum";
import { ResponseMessageInterface } from "./interfaces";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function checkDatabaseEmptyValues(valueToCheck : Array<any> | null, action : CRUDEnum, object : String) : NextResponse<ResponseMessageInterface> {
  switch(action){
    case CRUDEnum.CREATED:
      if (!valueToCheck || valueToCheck.length === 0) {
        return NextResponse.json({status: 500, message: `The ${object} could not be created.`, data: valueToCheck });
      }

      return NextResponse.json({status: 200, message: HttpMessageEnum.NO_EMPTY, data: valueToCheck});
    
    case CRUDEnum.UPDATE:
      if (!valueToCheck) {
        return NextResponse.json({status: 500, message: `There was a problem while updating the ${object}.`, data: valueToCheck});
      } else if (valueToCheck.length === 0) {
        return NextResponse.json({status: 404, message: `The ${object} could not be updated (not found).`, data: valueToCheck})
      }

      return NextResponse.json({status: 200, message: HttpMessageEnum.NO_EMPTY, data: valueToCheck});

    case CRUDEnum.DELETE:
      if (!valueToCheck) {
        return NextResponse.json({status: 500, message: `There was a problem while deleting the ${object}.`, data: valueToCheck});
      } else if (valueToCheck.length === 0) {
        return NextResponse.json({status: 404, message: `The ${object} was already deleted.`, data: valueToCheck})
      }

      return NextResponse.json({status: 200, message: HttpMessageEnum.NO_EMPTY, data: valueToCheck});

    case CRUDEnum.RETRIEVE_SINGLE:
      if(!valueToCheck) {
        return NextResponse.json({status: 500, message: `There was a problem while getting the ${object}.`, data: valueToCheck});
      } else if (valueToCheck.length === 0) {
        return NextResponse.json({status: 204, message: `The ${object} was already deleted.`, data: valueToCheck})
      }

      return NextResponse.json({status: 200, message: HttpMessageEnum.NO_EMPTY, data: valueToCheck});
      
    default:// get all records
      if (!valueToCheck) {
          return NextResponse.json({status: 500, message: `There was a problem while getting the ${object}.`, data: valueToCheck});
      } else if (valueToCheck.length === 0) {
          return NextResponse.json({status: 404, message: `No ${object} were found.`, data: valueToCheck})
      }

      return NextResponse.json({status: 200, message: HttpMessageEnum.NO_EMPTY, data: valueToCheck});
  }
}
