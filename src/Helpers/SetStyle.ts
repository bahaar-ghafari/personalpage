interface timingFunctionProp {
  delay?: string
  duration?: string
  property?: string | string[]
  timingFunction?: 'ease' | 'linear' | 'ease-in' | 'ease-out' | 'ease-in-ou'
} //'cubic-bezier(n,n,n,n)'
export const setTransition = (props: timingFunctionProp): string => {
  const { delay = 0, duration = '.2s', property = 'all', timingFunction = 'ease-out' } = props
  // /ease - specifies a transition effect with a slow start, then fast, then end slowly (this is default)
  // linear - specifies a transition effect with the same speed from start to end
  // ease-in - specifies a transition effect with a slow start
  // ease-out - specifies a transition effect with a slow end
  // ease-in-out - specifies a transition effect with a slow start and end
  // cubic-bezier(n,n,n,n) - lets you define your own values in a cubic-bezier function
  return `transform ${delay} ${property} ${duration} ${timingFunction}`
}
