import * as _ from 'lodash'
import {Role} from 'shared/types';

type AccomplishmentPartitioned = { [role: string]: Array<AccomplishmentRawData> }

export function getAccomplishmentIDs(role: Role) {
  return _.map(accomplishments[role], a => a.id);
}

export function getAccomplishmentByID(role: Role, id: number): AccomplishmentData {
  const v = _.head(_.filter(accomplishments[role], a => a.id === id));
  if (_.isUndefined(v)) {
    throw new TypeError('accomplishment not found');
  }
  return v;
}

export type AccomplishmentData = AccomplishmentRawData;

export interface AccomplishmentRawData {
  id: number
  role: Role
  label: string
  flavorText: string
  science: number
  government: number
  legacy: number
  finance: number
  culture: number
  upkeep: number
  victoryPoints: number
  effect: string
}

const accomplishments: AccomplishmentPartitioned = _.groupBy([
  {
    id: 1,
    role: "Researcher",
    label: "Interdisciplinary",
    flavorText: "You have more PhD's than most people have common sense.",
    science: 2,
    government: 1,
    legacy: 1,
    finance: 1,
    culture: 1,
    upkeep: 0,
    victoryPoints: 5,
    effect: ""
  },
  {
    id: 2,
    role: "Researcher",
    label: "Mars Helicopter",
    flavorText: "Your invention of a low gravity, low atmosphere, low-flying vehicle enables greater exploration of the Martian surface.",
    science: 2,
    government: 0,
    legacy: 0,
    finance: 1,
    culture: 1,
    upkeep: 0,
    victoryPoints: 3,
    effect: ""
  },
  {
    id: 3,
    role: "Researcher",
    label: "Celebrity Scientist",
    flavorText: "You've become a famous science personality both on Mars and Earth.",
    science: 0,
    government: 1,
    legacy: 2,
    finance: 0,
    culture: 0,
    upkeep: 0,
    victoryPoints: 1,
    effect: "You gain 3 Science Influences. These may ONLY be traded to other players. (You may not spend them to buy any accomplishments.)"
  },
  {
    id: 4,
    role: "Researcher",
    label: "Research Focused",
    flavorText: "You get long-term commitment from the current leader of the community that scientific research will always remain a priority of Port of Mars.",
    science: 0,
    government: 2,
    legacy: 1,
    finance: 0,
    culture: 0,
    upkeep: 0,
    victoryPoints: 1,
    effect: "Whenever a \"Life as Usual\" event is revealed, you gain a Science Influence."
  },
  {
    id: 5,
    role: "Researcher",
    label: "Fully Funded",
    flavorText: "You secured funding for your lab and research! It IS possible!",
    science: 0,
    government: 0,
    legacy: 0,
    finance: 2,
    culture: 2,
    upkeep: 0,
    victoryPoints: 4,
    effect: ""
  },
  {
    id: 6,
    role: "Researcher",
    label: "Highly Specialized",
    flavorText: "You're solely focused on your research, to the exclusion of all other pursuits.",
    science: 3,
    government: 0,
    legacy: 0,
    finance: 0,
    culture: 0,
    upkeep: 0,
    victoryPoints: 1,
    effect: "You can no longer make Politics or Legacy Influence. Science Influence only costs 1 Time Block to make."
  },
  {
    id: 7,
    role: "Researcher",
    label: "Radiation Shielding",
    flavorText: "You discover a material that is more effective at shielding the habitats from radiation.",
    science: 1,
    government: 0,
    legacy: 0,
    finance: 4,
    culture: 0,
    upkeep: 0,
    victoryPoints: 4,
    effect: ""
  },
  {
    id: 8,
    role: "Researcher",
    label: "Marsball Suit",
    flavorText: "Your brilliant suit design helps reduce the rate of injuries dramatically while heightening the spectacle of the athletes' most awe-inspiring plays.",
    science: 1,
    government: 0,
    legacy: 0,
    finance: 0,
    culture: 4,
    upkeep: 0,
    victoryPoints: 4,
    effect: ""
  },
  {
    id: 9,
    role: "Researcher",
    label: "Telescope",
    flavorText: "After much advocacy, you got your dream: funding for a Mars-based telescope to peer even deeper into space.",
    science: 2,
    government: 1,
    legacy: 1,
    finance: 0,
    culture: 0,
    upkeep: 0,
    victoryPoints: 2,
    effect: ""
  },
  {
    id: 10,
    role: "Researcher",
    label: "Terraforming",
    flavorText: "You create a terraforming plan to bring Mars closer to Earth-like conditions. It's a little outlandish, but it energizes the public's imagination.",
    science: 0,
    government: 2,
    legacy: 0,
    finance: 0,
    culture: 2,
    upkeep: 0,
    victoryPoints: 2,
    effect: ""
  },
  {
    id: 11,
    role: "Researcher",
    label: "Land Use Study",
    flavorText: "You secure financial and legal support to conduct a study about the future of Mars land usage.",
    science: 0,
    government: 2,
    legacy: 0,
    finance: 2,
    culture: 0,
    upkeep: 0,
    victoryPoints: 2,
    effect: ""
  },
  {
    id: 12,
    role: "Researcher",
    label: "Mars Mobile Game",
    flavorText: "You built an app in 24 hours, added absurd micro-transactions as a joke, and released it. Who could've guessed it would catch on?",
    science: 0,
    government: 0,
    legacy: 2,
    finance: 0,
    culture: 2,
    upkeep: 0,
    victoryPoints: 2,
    effect: ""
  },
  {
    id: 13,
    role: "Researcher",
    label: "New Food Flavorer",
    flavorText: "A simple chemical breakthrough results in an enormous range of added flavor to the otherwise bland diet the settlement endured before.",
    science: 0,
    government: 0,
    legacy: 2,
    finance: 2,
    culture: 0,
    upkeep: 0,
    victoryPoints: 2,
    effect: ""
  },
  {
    id: 14,
    role: "Researcher",
    label: "Grant Funk",
    flavorText: "Your latest failure to gain research funding sees you in bed for a week. It's not moping, it's mourning. (And time to draft up new proposals.)",
    science: 0,
    government: 0,
    legacy: 0,
    finance: 0,
    culture: 0,
    upkeep: -6,
    victoryPoints: 3,
    effect: ""
  },
  {
    id: 15,
    role: "Researcher",
    label: "Mutant Crops",
    flavorText: "Your attempt to improve food production processes instead wipes out an entire crop. Pro: You got incredible data! Con: You might all starve to death.",
    science: 0,
    government: 0,
    legacy: 0,
    finance: 0,
    culture: 0,
    upkeep: -13,
    victoryPoints: 6,
    effect: ""
  },
  {
    id: 16,
    role: "Researcher",
    label: "New Facilities",
    flavorText: "Through your efforts, you secure capital funding for building a new research facility at Port of Mars.",
    science: 3,
    government: 0,
    legacy: 0,
    finance: 1,
    culture: 0,
    upkeep: 0,
    victoryPoints: 3,
    effect: ""
  },
  {
    id: 17,
    role: "Researcher",
    label: "Extended Fuel Cells",
    flavorText: "Your research (funded by the Mars Tourism Bureau) has resulted in more efficient fuel cells for rovers.",
    science: 3,
    government: 0,
    legacy: 0,
    finance: 0,
    culture: 1,
    upkeep: 0,
    victoryPoints: 3,
    effect: ""
  },
  {
    id: 18,
    role: "Researcher",
    label: "Changing Minds",
    flavorText: "Through your lobbying and dedication, you sway public opinion on a key science policy.",
    science: 0,
    government: 3,
    legacy: 0,
    finance: 0,
    culture: 0,
    upkeep: 0,
    victoryPoints: 1,
    effect: "Whenever a player trades with you, you both gain an additional Time Block next round."
  },
  {
    id: 19,
    role: "Researcher",
    label: "Innovation",
    flavorText: "Your work across disciplines give you unique insights into many fields.",
    science: 0,
    government: 0,
    legacy: 3,
    finance: 0,
    culture: 0,
    upkeep: 0,
    victoryPoints: 1,
    effect: "Every round, after the event, you may turn in 2 Science Influence for 1 Influence of your choice."
  },
  {
    id: 20,
    role: "Researcher",
    label: "Community Upgrades",
    flavorText: "With your sharp eye, you've helped improve security and safety, making equipment run better and last longer.",
    science: 5,
    government: 0,
    legacy: 0,
    finance: 0,
    culture: 0,
    upkeep: 0,
    victoryPoints: 1,
    effect: "Every round, upkeep goes down by 20 instead of 25."
  },
  {
    id: 21,
    role: "Pioneer",
    label: "Jack of All Trades",
    flavorText: "You keep up to date on all things happening at Port of Mars. There's no way you're gonna miss any milestone or landmark label.",
    science: 2,
    government: 1,
    legacy: 1,
    finance: 1,
    culture: 1,
    upkeep: 0,
    victoryPoints: 5,
    effect: ""
  },
  {
    id: 22,
    role: "Pioneer",
    label: "Name Branding",
    flavorText: "With your wealth and connections, you establish your family name as an influential and affluent brand within the community.",
    science: 2,
    government: 0,
    legacy: 0,
    finance: 1,
    culture: 1,
    upkeep: 0,
    victoryPoints: 3,
    effect: ""
  },
  {
    id: 23,
    role: "Pioneer",
    label: "Natural Naming",
    flavorText: "Your nickname for a nearby geological feature has caught on. Now, everyone refers to that particular formation by the name you coined.",
    science: 0,
    government: 1,
    legacy: 2,
    finance: 0,
    culture: 0,
    upkeep: 0,
    victoryPoints: 1,
    effect: "Whenever a \"Life as Usual\" event is revealed, gain a Legacy Influence."
  },
  {
    id: 24,
    role: "Pioneer",
    label: "Martian Novelist",
    flavorText: "Your memoirs and travel journal of your time heading to Mars becomes an overnight bestseller.",
    science: 0,
    government: 2,
    legacy: 1,
    finance: 0,
    culture: 0,
    upkeep: 0,
    victoryPoints: 1,
    effect: "You gain three Legacy Influences. These may ONLY be traded to other players. (You may not spend them to buy any accomplishments.)"
  },
  {
    id: 25,
    role: "Pioneer",
    label: "First Martian Business",
    flavorText: "Thanks to your collaboration with the Entrepreneur, you're the first business to form and launch completely on Mars!",
    science: 0,
    government: 0,
    legacy: 0,
    finance: 2,
    culture: 2,
    upkeep: 0,
    victoryPoints: 4,
    effect: ""
  },
  {
    id: 26,
    role: "Pioneer",
    label: "First Family in Space",
    flavorText: "Your child is the first child to be born in space!",
    science: 3,
    government: 0,
    legacy: 0,
    finance: 0,
    culture: 0,
    upkeep: 0,
    victoryPoints: 1,
    effect: "Every round, after the event, you get an Influence of your choice.\nEvery round, you only get six Time Blocks."
  },
  {
    id: 27,
    role: "Pioneer",
    label: "Political Instigator",
    flavorText: "In a key election cycle, the political topic you champion has become the key, deciding issue for the community.",
    science: 1,
    government: 0,
    legacy: 0,
    finance: 4,
    culture: 0,
    upkeep: 0,
    victoryPoints: 4,
    effect: ""
  },
  {
    id: 28,
    role: "Pioneer",
    label: "Space Influencer",
    flavorText: "You are the ultimate ambassador for Port of Mars. Folks know: if they want something funded, get you to hype it up.",
    science: 1,
    government: 0,
    legacy: 0,
    finance: 0,
    culture: 4,
    upkeep: 0,
    victoryPoints: 4,
    effect: ""
  },
  {
    id: 29,
    role: "Pioneer",
    label: "Drone Race Champ",
    flavorText: "Besides Marsball, the most popular pastime is racing drones. You're one of the best pilots at Port of Mars.",
    science: 2,
    government: 1,
    legacy: 1,
    finance: 0,
    culture: 0,
    upkeep: 0,
    victoryPoints: 2,
    effect: ""
  },
  {
    id: 30,
    role: "Pioneer",
    label: "First Marsball Star",
    flavorText: "Who knew you'd have a knack for this new sport? You're the first star athlete, and your name will go down in history.",
    science: 0,
    government: 2,
    legacy: 0,
    finance: 0,
    culture: 2,
    upkeep: 0,
    victoryPoints: 2,
    effect: ""
  },
  {
    id: 31,
    role: "Pioneer",
    label: "Political Memoir",
    flavorText: "You write the first book documenting the workings of Port of Mars' government.",
    science: 0,
    government: 2,
    legacy: 0,
    finance: 2,
    culture: 0,
    upkeep: 0,
    victoryPoints: 2,
    effect: ""
  },
  {
    id: 32,
    role: "Pioneer",
    label: "Mining Rights",
    flavorText: "You spearhead the first negotiation for space mining rights, laying the groundwork for future mining sites.",
    science: 0,
    government: 0,
    legacy: 2,
    finance: 0,
    culture: 2,
    upkeep: 0,
    victoryPoints: 2,
    effect: ""
  },
  {
    id: 33,
    role: "Pioneer",
    label: "Mars Public Parks",
    flavorText: "You advocate for areas of Mars to be protected from development in an effort to preserve space for future generations.",
    science: 0,
    government: 0,
    legacy: 2,
    finance: 2,
    culture: 0,
    upkeep: 0,
    victoryPoints: 2,
    effect: ""
  },
  {
    id: 34,
    role: "Pioneer",
    label: "AWOL",
    flavorText: "Without approval, you take a hoard of supplies and venture outside Port of Mars. You return with an incredible discovery, but your absence was felt.",
    science: 0,
    government: 0,
    legacy: 0,
    finance: 0,
    culture: 0,
    upkeep: -6,
    victoryPoints: 3,
    effect: ""
  },
  {
    id: 35,
    role: "Pioneer",
    label: "(In)famous",
    flavorText: "Well, you certainly won't be forgotten. You are the reason why they now have TRIPLE check procedures on the main breach doors.",
    science: 0,
    government: 0,
    legacy: 0,
    finance: 0,
    culture: 0,
    upkeep: -13,
    victoryPoints: 6,
    effect: ""
  },
  {
    id: 36,
    role: "Pioneer",
    label: "Explorer's Permit",
    flavorText: "You're the first civilian to get permission from Port officials to lead regular expeditions into the depths of Valles Marineris.",
    science: 3,
    government: 0,
    legacy: 0,
    finance: 1,
    culture: 0,
    upkeep: 0,
    victoryPoints: 3,
    effect: ""
  },
  {
    id: 37,
    role: "Pioneer",
    label: "Luxury Quarters",
    flavorText: "You get the permits to build the first luxury quarters in the habitat. Creature comforts for those with discerning taste.",
    science: 3,
    government: 0,
    legacy: 0,
    finance: 0,
    culture: 1,
    upkeep: 0,
    victoryPoints: 3,
    effect: ""
  },
  {
    id: 38,
    role: "Pioneer",
    label: "Community Collaborator",
    flavorText: "Some deride you as a glory seeker, ironically unaware of all the ways you contribute and give back to the Port of Mars community.",
    science: 0,
    government: 3,
    legacy: 0,
    finance: 0,
    culture: 0,
    upkeep: 0,
    victoryPoints: 1,
    effect: "At the end of each round, for each player that traded with you that round, gain 1 upkeep."
  },
  {
    id: 39,
    role: "Pioneer",
    label: "Technology Upgrade",
    flavorText: "You invest in the latest tech to help you in your dream of pushing the bounds of what humankind can achieve.",
    science: 0,
    government: 0,
    legacy: 3,
    finance: 0,
    culture: 0,
    upkeep: 0,
    victoryPoints: 1,
    effect: "For the next three rounds, you gain your choice of one Government or Business Influence at the start of that round."
  },
  {
    id: 40,
    role: "Pioneer",
    label: "Always New Adventures",
    flavorText: "Each day at Port of Mars is filled with new wonder. Each day you live your life to the fullest, tempting fate and picking fights with lady luck.",
    science: 5,
    government: 0,
    legacy: 0,
    finance: 0,
    culture: 0,
    upkeep: 0,
    victoryPoints: 1,
    effect: "Every round, when the event card is revealed, you may choose to discard that card instead of having it take effect. Reveal a new event card. That event takes effect instead."
  },
  {
    id: 41,
    role: "Entrepreneur",
    label: "Diversified Investor",
    flavorText: "You hold stock in many different ventures at Port of Mars.",
    science: 2,
    government: 1,
    legacy: 1,
    finance: 1,
    culture: 1,
    upkeep: 0,
    victoryPoints: 5,
    effect: ""
  },
  {
    id: 42,
    role: "Entrepreneur",
    label: "Equipment Contract",
    flavorText: "Your company wins the bid to provide researchers with the supplies they need.",
    science: 2,
    government: 0,
    legacy: 0,
    finance: 1,
    culture: 1,
    upkeep: 0,
    victoryPoints: 3,
    effect: ""
  },
  {
    id: 43,
    role: "Entrepreneur",
    label: "MarsChat",
    flavorText: "You create the social media and communication platforms used by most settlers throughout Port of Mars.",
    science: 0,
    government: 1,
    legacy: 2,
    finance: 0,
    culture: 0,
    upkeep: 0,
    victoryPoints: 1,
    effect: "Whenever a \"Life as Usual\" event is revealed, gain a Finance Influence."
  },
  {
    id: 44,
    role: "Entrepreneur",
    label: "Government Funding",
    flavorText: "You talk to the right people at the right events to secure seed funding for your space business dreams.",
    science: 0,
    government: 2,
    legacy: 1,
    finance: 0,
    culture: 0,
    upkeep: 0,
    victoryPoints: 1,
    effect: "You gain 3 Finance Influences. These may ONLY be traded to other players. (You may not spend them to buy any accomplishments)."
  },
  {
    id: 45,
    role: "Entrepreneur",
    label: "Dividends",
    flavorText: "Your early investment in a research venture comes to fruition, and as Earthbound companies move to buy the startup, you cash in.",
    science: 0,
    government: 0,
    legacy: 0,
    finance: 2,
    culture: 2,
    upkeep: 0,
    victoryPoints: 4,
    effect: ""
  },
  {
    id: 46,
    role: "Entrepreneur",
    label: "Operating in the Red",
    flavorText: "Business is booming at Port of Mars, but isn't profitable yet. Its operation is a burden on the community, but you�re certain it will all pay off soon�.",
    science: 3,
    government: 0,
    legacy: 0,
    finance: 0,
    culture: 0,
    upkeep: 0,
    victoryPoints: 1,
    effect: "Every round, after the event, you may destroy 3 Upkeep. If you do, gain 1 Influence of your choice."
  },
  {
    id: 47,
    role: "Entrepreneur",
    label: "Rocket Revolution",
    flavorText: "Your company figured out how to make cheaper rockets, allowing more economical travel between Mars and Earth.",
    science: 1,
    government: 0,
    legacy: 0,
    finance: 4,
    culture: 0,
    upkeep: 0,
    victoryPoints: 4,
    effect: ""
  },
  {
    id: 48,
    role: "Entrepreneur",
    label: "Habitat 2.0",
    flavorText: "Your firm helped develop a more efficient architecture plan for future habitats, expanding the number of people Port of Mars can accommodate.",
    science: 1,
    government: 0,
    legacy: 0,
    finance: 0,
    culture: 4,
    upkeep: 0,
    victoryPoints: 4,
    effect: ""
  },
  {
    id: 49,
    role: "Entrepreneur",
    label: "Terra Water Craze",
    flavorText: "You secure space on the next rocket to ship bottled water from Earth, selling \"artisanal terra water\" that \"Tastes Like Home\" at exorbitant prices.",
    science: 2,
    government: 1,
    legacy: 1,
    finance: 0,
    culture: 0,
    upkeep: 0,
    victoryPoints: 2,
    effect: ""
  },
  {
    id: 50,
    role: "Entrepreneur",
    label: "Further Automation",
    flavorText: "You help spearhead advancements in robotic technologies to help automate upkeep tasks previously assigned to humans.",
    science: 0,
    government: 2,
    legacy: 0,
    finance: 0,
    culture: 2,
    upkeep: 0,
    victoryPoints: 2,
    effect: ""
  },
  {
    id: 51,
    role: "Entrepreneur",
    label: "Exclusive Contract",
    flavorText: "You secure an exclusive contract with Port of Mars to build future facilities.",
    science: 0,
    government: 2,
    legacy: 0,
    finance: 2,
    culture: 0,
    upkeep: 0,
    victoryPoints: 2,
    effect: ""
  },
  {
    id: 52,
    role: "Entrepreneur",
    label: "Holodeck",
    flavorText: "You've done it: you've perfected holodeck technology. Homesick settlers flock to pay and experience realistically generated Earth environments.",
    science: 0,
    government: 0,
    legacy: 2,
    finance: 0,
    culture: 2,
    upkeep: 0,
    victoryPoints: 2,
    effect: ""
  },
  {
    id: 53,
    role: "Entrepreneur",
    label: "Marsball Team Owner",
    flavorText: "You were an early investor in the sport and now own the most successful team in the league!",
    science: 0,
    government: 0,
    legacy: 2,
    finance: 2,
    culture: 0,
    upkeep: 0,
    victoryPoints: 2,
    effect: ""
  },
  {
    id: 54,
    role: "Entrepreneur",
    label: "Cutting Corners",
    flavorText: "Surely these slightly sub-standard building materials won't cause that big a problem - and look at the profits!",
    science: 0,
    government: 0,
    legacy: 0,
    finance: 0,
    culture: 0,
    upkeep: -6,
    victoryPoints: 3,
    effect: ""
  },
  {
    id: 55,
    role: "Entrepreneur",
    label: "Insider Trading",
    flavorText: "You make an opportunistic move to sell a huge chunk of your ownership in Port of Mars stock, making a pretty penny but causing a panic in the market.",
    science: 0,
    government: 0,
    legacy: 0,
    finance: 0,
    culture: 0,
    upkeep: -13,
    victoryPoints: 6,
    effect: ""
  },
  {
    id: 56,
    role: "Entrepreneur",
    label: "Future Securities",
    flavorText: "You secure Earth investors to make sure that your Port of Mars businesses are funded for the near future.",
    science: 3,
    government: 0,
    legacy: 0,
    finance: 1,
    culture: 0,
    upkeep: 0,
    victoryPoints: 3,
    effect: ""
  },
  {
    id: 57,
    role: "Entrepreneur",
    label: "Patent Investment",
    flavorText: "A lab you funded has secured a patent to an important chemical discovery that yields you nice returns.",
    science: 3,
    government: 0,
    legacy: 0,
    finance: 0,
    culture: 1,
    upkeep: 0,
    victoryPoints: 3,
    effect: ""
  },
  {
    id: 58,
    role: "Entrepreneur",
    label: "Favorable Laws",
    flavorText: "As a major investor in the settlement, you put your weight behind laws that spur innovation - and opportunities for your ventures, of course.",
    science: 0,
    government: 3,
    legacy: 0,
    finance: 0,
    culture: 0,
    upkeep: 0,
    victoryPoints: 1,
    effect: "Each other player may gain a Government Influence. For each player who does, you gain an Influence of your choice."
  },
  {
    id: 59,
    role: "Entrepreneur",
    label: "Martian Patron",
    flavorText: "Your keen interest in art pays off as a painter you sponsor becomes wildly popular in both the Port of Mars and Earth art worlds.",
    science: 0,
    government: 0,
    legacy: 3,
    finance: 0,
    culture: 0,
    upkeep: 0,
    victoryPoints: 1,
    effect: "Each player may gain a Culture Influence. For each player who does, you gain an Influence of your choice."
  },
  {
    id: 60,
    role: "Entrepreneur",
    label: "Incubator",
    flavorText: "You leverage your business acumen to create a start up incubator for Port of Mars, opening the door to new opportunities for ambitious Martians.",
    science: 5,
    government: 0,
    legacy: 0,
    finance: 0,
    culture: 0,
    upkeep: 0,
    victoryPoints: 1,
    effect: "Every round, all players may reveal an additional AccomplishmentSet card."
  },
  {
    id: 61,
    role: "Politician",
    label: "Know Your Constituents",
    flavorText: "You take the time to meet the people of Port of Mars and are well versed on the concerns of the people.",
    science: 2,
    government: 1,
    legacy: 1,
    finance: 1,
    culture: 1,
    upkeep: 0,
    victoryPoints: 5,
    effect: ""
  },
  {
    id: 62,
    role: "Politician",
    label: "Favored Candidate",
    flavorText: "You lead in the polls and are generally well liked by folks. Things look good this election cylce.",
    science: 2,
    government: 0,
    legacy: 0,
    finance: 1,
    culture: 1,
    upkeep: 0,
    victoryPoints: 3,
    effect: ""
  },
  {
    id: 63,
    role: "Politician",
    label: "Why Not Both?",
    flavorText: "You manage to balance the needs of government and research, earning the support of researchers and entrepreneurs alike.",
    science: 0,
    government: 1,
    legacy: 2,
    finance: 0,
    culture: 0,
    upkeep: 0,
    victoryPoints: 1,
    effect: "You gain 3 Government Influences. These may ONLY be traded to other players. (You may not spend them to buy any accomplishments.)"
  },
  {
    id: 64,
    role: "Politician",
    label: "Faith in Government",
    flavorText: "Your steady hand and informed decision making inspires high confidence among people in the government's ability to run and improve things.",
    science: 0,
    government: 2,
    legacy: 1,
    finance: 0,
    culture: 0,
    upkeep: 0,
    victoryPoints: 1,
    effect: "Whenever a \"Life as Usual\" event is revealed, gain a Government Influence."
  },
  {
    id: 65,
    role: "Politician",
    label: "Cultural Legacy",
    flavorText: "You declare your dedication to creating a Martian identity, taking advantage of this opportunity to define what humanity values on a brand-new world.",
    science: 0,
    government: 0,
    legacy: 0,
    finance: 2,
    culture: 2,
    upkeep: 0,
    victoryPoints: 4,
    effect: ""
  },
  {
    id: 66,
    role: "Politician",
    label: "Census",
    flavorText: "You call it collecting data. Some worry it's an overreach of governmental surveillance. You quietly note which folks say it's the latter.",
    science: 3,
    government: 0,
    legacy: 0,
    finance: 0,
    culture: 0,
    upkeep: 0,
    victoryPoints: 1,
    effect: "Every round, after the event, you may choose a player. That player must truthfully disclose how they allocated their time last round."
  },
  {
    id: 67,
    role: "Politician",
    label: "First Port of Mars Leader",
    flavorText: "You're the first politician to be chosen to lead Port of Mars via Martian-only election. A momentous day!",
    science: 1,
    government: 0,
    legacy: 0,
    finance: 4,
    culture: 0,
    upkeep: 0,
    victoryPoints: 4,
    effect: ""
  },
  {
    id: 68,
    role: "Politician",
    label: "Celebrity Martian Recruit",
    flavorText: "You convince a major Earth celebrity to move to Port of Mars. The excitement around their arrival boosts your approval ratings.",
    science: 1,
    government: 0,
    legacy: 0,
    finance: 0,
    culture: 4,
    upkeep: 0,
    victoryPoints: 4,
    effect: ""
  },
  {
    id: 69,
    role: "Politician",
    label: "Policy Wonk",
    flavorText: "The legislation you push is boring and makes your stump speech a snorefest, but you make some very real (if incremental) progress!",
    science: 2,
    government: 1,
    legacy: 1,
    finance: 0,
    culture: 0,
    upkeep: 0,
    victoryPoints: 2,
    effect: ""
  },
  {
    id: 70,
    role: "Politician",
    label: "Political Ads",
    flavorText: "Even in space, you gotta book air time to win elections.",
    science: 0,
    government: 2,
    legacy: 0,
    finance: 0,
    culture: 2,
    upkeep: 0,
    victoryPoints: 2,
    effect: ""
  },
  {
    id: 71,
    role: "Politician",
    label: "Coining Currency",
    flavorText: "As the Port of Mars economy flourishes, you get to name the official Martian currency.",
    science: 0,
    government: 2,
    legacy: 0,
    finance: 2,
    culture: 0,
    upkeep: 0,
    victoryPoints: 2,
    effect: ""
  },
  {
    id: 72,
    role: "Politician",
    label: "Mars Tourism",
    flavorText: "You propose and sign into law rules that promote tourism and exploration of Mars, boosting interest in immigration for the next wave of Martians.",
    science: 0,
    government: 0,
    legacy: 2,
    finance: 0,
    culture: 2,
    upkeep: 0,
    victoryPoints: 2,
    effect: ""
  },
  {
    id: 73,
    role: "Politician",
    label: "Expansion",
    flavorText: "You run on a platform to expand to a second Port of Mars location, proposing another community among the lava tubes of Pavonis Mons.",
    science: 0,
    government: 0,
    legacy: 2,
    finance: 2,
    culture: 0,
    upkeep: 0,
    victoryPoints: 2,
    effect: ""
  },
  {
    id: 74,
    role: "Politician",
    label: "Short-Term Gains",
    flavorText: "You made some outlandish promises to specific groups to win the election. Easy! Now you have to find funding to fulfill those promises...less easy.",
    science: 0,
    government: 0,
    legacy: 0,
    finance: 0,
    culture: 0,
    upkeep: -6,
    victoryPoints: 3,
    effect: ""
  },
  {
    id: 75,
    role: "Politician",
    label: "Bribes",
    flavorText: "Special interest groups approached you to craft legislation that favors their autonomy. They're a powerful voting bloc... but was it worth the cost?",
    science: 0,
    government: 0,
    legacy: 0,
    finance: 0,
    culture: 0,
    upkeep: -13,
    victoryPoints: 6,
    effect: ""
  },
  {
    id: 76,
    role: "Politician",
    label: "Polling Well",
    flavorText: "Your approval ratings are doing well! The start of a positive trend, or the calm before the storm?",
    science: 3,
    government: 0,
    legacy: 0,
    finance: 1,
    culture: 0,
    upkeep: 0,
    victoryPoints: 3,
    effect: ""
  },
  {
    id: 77,
    role: "Politician",
    label: "Charming",
    flavorText: "A video clip of your reaction at a Marsball event goes viral, and folks view you more positively as a result.",
    science: 3,
    government: 0,
    legacy: 0,
    finance: 0,
    culture: 1,
    upkeep: 0,
    victoryPoints: 3,
    effect: ""
  },
  {
    id: 78,
    role: "Politician",
    label: "Emergency System",
    flavorText: "You vote to build a better emergency alert and response system for Port of Mars, hoping you will never have to use it.",
    science: 0,
    government: 3,
    legacy: 0,
    finance: 0,
    culture: 0,
    upkeep: 0,
    victoryPoints: 1,
    effect: "One time this game, you may compel all players use all Time Blocks they have that round for Upkeep."
  },
  {
    id: 79,
    role: "Politician",
    label: "Disaster Preparations",
    flavorText: "Tightening the belt is never fun, but you call for mandatory preparations for some major planetary events predicted by your scientists.",
    science: 0,
    government: 0,
    legacy: 3,
    finance: 0,
    culture: 0,
    upkeep: 0,
    victoryPoints: 1,
    effect: "Next round, each player gets 2 fewer Time Blocks. Add 20 upkeep."
  },
  {
    id: 80,
    role: "Politician",
    label: "Functional Government",
    flavorText: "You've accomplished what never seems to happen on Earth: the government of Port of Mars is humming along, a portrait of productivity.",
    science: 5,
    government: 0,
    legacy: 0,
    finance: 0,
    culture: 0,
    upkeep: 0,
    victoryPoints: 1,
    effect: "Every round, after the Event, each player gains an Influence of their choice."
  },
  {
    id: 81,
    role: "Curator",
    label: "A Little Bit of Everything",
    flavorText: "You help to breathe life into cultural and recreational developments across disciplines.",
    science: 2,
    government: 1,
    legacy: 1,
    finance: 1,
    culture: 1,
    upkeep: 0,
    victoryPoints: 5,
    effect: ""
  },
  {
    id: 82,
    role: "Curator",
    label: "Marsball!",
    flavorText: "Taking advantage of the lower gravity on Mars, you invent an exciting new sport!",
    science: 2,
    government: 0,
    legacy: 0,
    finance: 1,
    culture: 1,
    upkeep: 0,
    victoryPoints: 3,
    effect: ""
  },
  {
    id: 83,
    role: "Curator",
    label: "Artist Grants",
    flavorText: "You establish a grant that sponsors artists to create Martian artwork, solidifying the arts as a cornerstone of Port of Mars life.",
    science: 0,
    government: 1,
    legacy: 2,
    finance: 0,
    culture: 0,
    upkeep: 0,
    victoryPoints: 1,
    effect: "You gain 3 Culture Influences. These may ONLY be traded to other players (you may not spend them to buy any accomplishments)."
  },
  {
    id: 84,
    role: "Curator",
    label: "Art Installation",
    flavorText: "You commission a beautiful sculpture garden that is a beloved gathering place, sure to last for generations. Or at least until the first hull breach.",
    science: 0,
    government: 2,
    legacy: 1,
    finance: 0,
    culture: 0,
    upkeep: 0,
    victoryPoints: 1,
    effect: "Whenever a \"Life as Usual\" event is revealed, gain a Culture Influence."
  },
  {
    id: 85,
    role: "Curator",
    label: "SNN",
    flavorText: "You create the Space News Network: a news show that updates folks on the latest happenings and developments both on Mars and on Earth.",
    science: 0,
    government: 0,
    legacy: 0,
    finance: 2,
    culture: 2,
    upkeep: 0,
    victoryPoints: 4,
    effect: ""
  },
  {
    id: 86,
    role: "Curator",
    label: "You're Famous!",
    flavorText: "You're kind of a big deal.",
    science: 3,
    government: 0,
    legacy: 0,
    finance: 0,
    culture: 0,
    upkeep: 0,
    victoryPoints: 1,
    effect: "Every round, after the event, other players must give you 1 Time Block."
  },
  {
    id: 87,
    role: "Curator",
    label: "Make Science Cool",
    flavorText: "Scientific research is important, but dense papers are hardly thrilling. You help translate research into digestible media to build public excitement.",
    science: 1,
    government: 0,
    legacy: 0,
    finance: 4,
    culture: 0,
    upkeep: 0,
    victoryPoints: 4,
    effect: ""
  },
  {
    id: 88,
    role: "Curator",
    label: "Politics Podcast",
    flavorText: "Your insightful analysis, sharp use of data, and witty banter make your political commentary show a Port of Mars hit.",
    science: 1,
    government: 0,
    legacy: 0,
    finance: 0,
    culture: 4,
    upkeep: 0,
    victoryPoints: 4,
    effect: ""
  },
  {
    id: 89,
    role: "Curator",
    label: "First Marsball League",
    flavorText: "You build the first low-gravity sports league, giving folks a fun diversion and attracting the advertising dollars of Earth viewers and sponsors.",
    science: 2,
    government: 1,
    legacy: 1,
    finance: 0,
    culture: 0,
    upkeep: 0,
    victoryPoints: 2,
    effect: ""
  },
  {
    id: 90,
    role: "Curator",
    label: "Weekly Report",
    flavorText: "Collaborating with community leadership, you establish a weekly show that updates everyone in the settlement about pertinent news.",
    science: 0,
    government: 2,
    legacy: 0,
    finance: 0,
    culture: 2,
    upkeep: 0,
    victoryPoints: 2,
    effect: ""
  },
  {
    id: 91,
    role: "Curator",
    label: "Rover Touring Company",
    flavorText: "You commission a few rover vehicles for recreational use, creating an exciting new tourism opportunity.",
    science: 0,
    government: 2,
    legacy: 0,
    finance: 2,
    culture: 0,
    upkeep: 0,
    victoryPoints: 2,
    effect: ""
  },
  {
    id: 92,
    role: "Curator",
    label: "Ministry of Culture",
    flavorText: "You advocate for the forming of a ministry of culture, gaining financial and governmental support for arts and entertainment at Port of Mars.",
    science: 0,
    government: 0,
    legacy: 2,
    finance: 0,
    culture: 2,
    upkeep: 0,
    victoryPoints: 2,
    effect: ""
  },
  {
    id: 93,
    role: "Curator",
    label: "Robot Brawls!",
    flavorText: "Some scientists frowned at the idea; some called it a \"waste of vital resources\"; but everyone knows folks want to see low-grav robot fights.",
    science: 0,
    government: 0,
    legacy: 2,
    finance: 2,
    culture: 0,
    upkeep: 0,
    victoryPoints: 2,
    effect: ""
  },
  {
    id: 94,
    role: "Curator",
    label: "Genius Takes Time",
    flavorText: "Some don't see the value in creating artistic and recreational endeavors. You fight for your vision and get approvals, but cause some social friction.",
    science: 0,
    government: 0,
    legacy: 0,
    finance: 0,
    culture: 0,
    upkeep: -6,
    victoryPoints: 3,
    effect: ""
  },
  {
    id: 95,
    role: "Curator",
    label: "Ambitious Sculpture",
    flavorText: "The ambitious sculpture project will be a memorable and visible landmark on Mars�if Port of Mars survives the resulting material shortage.",
    science: 0,
    government: 0,
    legacy: 0,
    finance: 0,
    culture: 0,
    upkeep: -13,
    victoryPoints: 6,
    effect: ""
  },
  {
    id: 96,
    role: "Curator",
    label: "The Drone Show",
    flavorText: "You build a documentary-style nature show that has scientists livestreaming drone flights over the Martian landscape.",
    science: 3,
    government: 0,
    legacy: 0,
    finance: 1,
    culture: 0,
    upkeep: 0,
    victoryPoints: 3,
    effect: ""
  },
  {
    id: 97,
    role: "Curator",
    label: "Official Sport",
    flavorText: "Through your efforts, Marsball is declared the official sport of Mars.",
    science: 3,
    government: 0,
    legacy: 0,
    finance: 0,
    culture: 1,
    upkeep: 0,
    victoryPoints: 3,
    effect: ""
  },
  {
    id: 98,
    role: "Curator",
    label: "Cultural Icon",
    flavorText: "You've firmly established yourself as a founding figure in creating Port of Mars' cultural and artistic identity.",
    science: 0,
    government: 3,
    legacy: 0,
    finance: 0,
    culture: 0,
    upkeep: 0,
    victoryPoints: 1,
    effect: "One time during this game, you may add 10 Upkeep."
  },
  {
    id: 99,
    role: "Curator",
    label: "Marsball Empire",
    flavorText: "Your promotion of Marsball has exploded its popularity on Earth and Mars, gaining the attention of researchers and politicians alike.",
    science: 0,
    government: 0,
    legacy: 3,
    finance: 0,
    culture: 0,
    upkeep: 0,
    victoryPoints: 1,
    effect: "For the next 3 rounds, you gain your choice of one Government or Science Influence at the start of that round."
  },
  {
    id: 100,
    role: "Curator",
    label: "Innovation!",
    flavorText: "Having established their own unique identities, Martian music, art, and entertainment are now hugely influential on Earth tastes and trends.",
    science: 5,
    government: 0,
    legacy: 0,
    finance: 0,
    culture: 0,
    upkeep: 0,
    victoryPoints: 1,
    effect: "Every round, all players gain 1 additional Time Block."
  }
], 'role');
