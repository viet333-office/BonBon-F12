import { put, takeLatest } from "redux-saga/effects"
import { customerAction } from "../actions"
import customerTypes from "../constants"
import useLocalStorage from "../hook/index"
import listCustomerData from "../mockup/index"
import removeVietnameseTones from "../utils"

