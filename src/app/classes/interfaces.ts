import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class InterfacesService {
}


export interface Country {
  id_country: any,
  country: string,
  hash_country: string,
  image: any,
  is_active: boolean
}

export interface Participant {
  hash_participant: string
  name: string
  last_name: string
  email: string
  profile_picture: string
  country: Country
  date_add: string
  is_registered: any
}

export interface CatWithActivities {
  activities: Activities[]
  category: string
  hash_category: string
  id_category: any
  image: any
  is_active: any
  colour: any
}

export interface Activities {
  activity: string
  hash_activity: string
  hash_category: string
  how: string
  id_activity: any
  image_activity: string
  summary: string
  type: string
  winner: string
  img_about: any
}

export interface Judges {
  name: string
  last_name: string
  hash_admin: string
  email: string
  role: string
  profile_picture: string
  description: string
  title: string
}


export interface ActiEvidence {
  activity: string
  hash_activity: string
  hash_category: string
  how: string
  id_activity: any
  image_activity: string
  summary: string
  type: string
  rating_type: string
  winner: string
  img_about: any
  category: Categorie
}

export interface Categorie {
  category: string
  hash_category: string
  id_category: any
  image: any
  is_active: any
  colour: any
  how_icon: any
  winner_icon: any
}

export interface EvidenceActivity {
  activity: ActiEvidence,
  evidence: Evidence[]
}

export interface Evidence {
  hash_evidence: string
  description: string
  time: any
  distance: any
  actions: any
  repetitions: any
  evidence: string
  type_evidence: string
  date_evidence: string
  hash_activity: string
  activity: string,
  participant: Participant
}

export interface TeambyParticipant {
  hash_participant: string
  hash_team: string
  id_team: number
  hash_activity: string
  team_name: string
  team_image: string
  date_add: any
}

export interface FirstLeaderboard {
  distance: any
  tiempo: any
  actions: any
  repetitions: any
  participant: Participant
}

export interface FirstLeaderboardTeam {
  distance: any
  team: TeamLeaderBoard
  tiempo: any
}

export interface TeamLeaderBoard{
  date_add: string
  hash_activity: string
  hash_participant: string
  hash_team: string
  id_team: any
  team_image: any
  team_name: string
}

export interface Activity {
  hash_activity: string
  activity: string
  how: string
  summary: string
  winner: string
  type: string
  hash_category: string
}

export interface ParticipantTeam {
  hash_participant: string
  hash_team: string
  id_participant: number
  name: string
  last_name: string
  email: string
  profile_picture: string
  hash_country: string
  date_add: any
  is_registered: any
}

export interface Team {
  id_team: number
  hash_team: string
  hash_participant: string
  team_name: string
  team_image: string
  date_add: any
  activity: Activity
  participants: ParticipantTeam[]
}

export interface Medal{
  winners: number
  type: String
}

export interface LeaderboardGeneral{
  country: Country
  points: number
  medals: Medal[]
}