import { DayRange } from "@/features/weather/services/forecast"

/**
 * 表示する天気日数上限
 */
export const Day = 7 as const satisfies DayRange
