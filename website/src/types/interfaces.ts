export interface Sponsor {
  name: string
  image: string
  meta: string
  shortDesc: string
  longDesc: string
  internalRoute: string
  opportunities: ('Sydney' | 'Melbourne')[]
  degrees: ('programming' | 'design')[]
  website: string
  currentOpportunities: CurrentOpportunity[]
}

export interface CurrentOpportunity {
  title: string
  role: 'internship'
  locations: ('Sydney' | 'Melbourne')[]
}
