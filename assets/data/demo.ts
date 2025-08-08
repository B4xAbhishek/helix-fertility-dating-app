import { DataT } from "../../types";
import IMAGE_01 from "../images/01.jpg";
import IMAGE_02 from "../images/02.jpg";
import IMAGE_03 from "../images/03.jpg";
import IMAGE_04 from "../images/04.jpg";
import IMAGE_05 from "../images/05.jpg";
import IMAGE_06 from "../images/06.jpg";
import IMAGE_07 from "../images/07.jpg";
import IMAGE_08 from "../images/08.jpg";
import IMAGE_09 from "../images/09.jpg";
import IMAGE_10 from "../images/10.jpg";

const data: DataT[] = [
  {
    id: 1,
    name: "Andy",
    age: "42",
    job: "Senior software / tech sales",
    education: "University of Birmingham",
    topics: ["Ambition"],
    isOnline: true,
    match: "78",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    message:
      "I will go back to Gotham and I will fight men Iike this but I will not become an executioner.",
    image: IMAGE_01,
    location: "London, UK",
    height: "6'1\"",
    religion: "Spiritual",
    smoking: false,
    drinking: "Socially",
    drugs: false,
    datingIntent: "serious",
    reproductiveIntent: {
      searchingFor: "sperm",
      lookingFor: "coParentChild"
    },
    geneticTraits: {
      bloodType: "O+",
      recessiveCarrierTraits: ["Cystic Fibrosis"],
      fertilityIndicators: ["Normal"],
      familyHistory: ["No major issues"]
    },
    donorPreferences: {
      isDonor: true,
      donorType: "sperm",
      coParentingInterest: true
    },
    children: {
      hasChildren: false,
      wantsChildren: true,
      wantsMoreChildren: false
    }
  },
  {
    id: 2,
    name: "Sarah",
    age: "28",
    job: "Marketing Manager",
    education: "NYU",
    topics: ["Travel", "Photography"],
    match: "93",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    isOnline: false,
    message: "Someone like you. Someone who'll rattle the cages.",
    image: IMAGE_02,
    location: "New York, NY",
    height: "5'6\"",
    religion: "Agnostic",
    smoking: false,
    drinking: "Occasionally",
    drugs: false,
    datingIntent: "serious",
    reproductiveIntent: {
      searchingFor: "egg",
      lookingFor: "directDonor"
    },
    geneticTraits: {
      bloodType: "A-",
      recessiveCarrierTraits: [],
      fertilityIndicators: ["PCOS"],
      familyHistory: ["Diabetes"]
    },
    donorPreferences: {
      isSeekingDonor: true,
      seekingDonorType: "egg",
      coParentingInterest: false
    },
    children: {
      hasChildren: false,
      wantsChildren: true,
      wantsMoreChildren: false
    }
  },
  {
    id: 3,
    name: "Mike",
    age: "35",
    job: "Software Engineer",
    education: "Stanford",
    topics: ["Technology", "Fitness"],
    match: "45",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    isOnline: false,
    message:
      "Oh, hee-hee, aha. Ha, ooh, hee, ha-ha, ha-ha. And I thought my jokes were bad.",
    image: IMAGE_03,
    location: "San Francisco, CA",
    height: "5'11\"",
    religion: "Atheist",
    smoking: false,
    drinking: "Socially",
    drugs: false,
    datingIntent: "coParenting",
    reproductiveIntent: {
      searchingFor: "coParent",
      lookingFor: "coParentChild"
    },
    geneticTraits: {
      bloodType: "B+",
      recessiveCarrierTraits: ["Sickle Cell"],
      fertilityIndicators: ["Normal"],
      familyHistory: ["Hypertension"]
    },
    donorPreferences: {
      coParentingInterest: true
    },
    children: {
      hasChildren: false,
      wantsChildren: true,
      wantsMoreChildren: false
    }
  },
  {
    id: 4,
    name: "John Lebsack",
    match: "88",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    isOnline: true,
    message: "Bats frighten me. It's time my enemies shared my dread.",
    image: IMAGE_04,
    location: "Chicago, IL",
    height: "6'0\"",
    religion: "Christian",
    smoking: true,
    drinking: "Regularly",
    drugs: false,
    datingIntent: "casual",
    reproductiveIntent: {
      searchingFor: "any",
      lookingFor: "any"
    },
    geneticTraits: {
      bloodType: "AB+",
      recessiveCarrierTraits: [],
      fertilityIndicators: ["Normal"],
      familyHistory: []
    },
    donorPreferences: {
      isDonor: false,
      coParentingInterest: false
    },
    children: {
      hasChildren: false,
      wantsChildren: false,
      wantsMoreChildren: false
    }
  },
  {
    id: 5,
    name: "James Dietrich",
    match: "76",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    isOnline: false,
    message: "It's not who I am underneath but what I do that defines me.",
    image: IMAGE_05,
    location: "Austin, TX",
    height: "5'9\"",
    religion: "Jewish",
    smoking: false,
    drinking: "Socially",
    drugs: false,
    datingIntent: "marriage",
    reproductiveIntent: {
      searchingFor: "relationship",
      lookingFor: "relationshipChild"
    },
    geneticTraits: {
      bloodType: "O-",
      recessiveCarrierTraits: ["Tay-Sachs"],
      fertilityIndicators: ["Normal"],
      familyHistory: ["Cancer"]
    },
    donorPreferences: {
      coParentingInterest: false
    },
    children: {
      hasChildren: false,
      wantsChildren: true,
      wantsMoreChildren: false
    }
  },
  {
    id: 6,
    name: "Patricia Schulist",
    match: "95",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    isOnline: true,
    message:
      "You have nothing, nothing to threaten me with. Nothing to do with all your strength.",
    image: IMAGE_06,
    location: "Miami, FL",
    height: "5'7\"",
    religion: "Catholic",
    smoking: false,
    drinking: "Occasionally",
    drugs: false,
    datingIntent: "serious",
    reproductiveIntent: {
      searchingFor: "egg",
      lookingFor: "donorBank"
    },
    geneticTraits: {
      bloodType: "A+",
      recessiveCarrierTraits: ["Cystic Fibrosis"],
      fertilityIndicators: ["Endometriosis"],
      familyHistory: ["Autoimmune"]
    },
    donorPreferences: {
      isSeekingDonor: true,
      seekingDonorType: "egg",
      coParentingInterest: false
    },
    children: {
      hasChildren: false,
      wantsChildren: true,
      wantsMoreChildren: false
    }
  },
  {
    id: 7,
    name: "Chelsey Weissnat",
    match: "67",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    isOnline: true,
    message:
      "Never start with the head. The victim gets all fuzzy. He can't feel the next... See?",
    image: IMAGE_07,
    location: "Seattle, WA",
    height: "5'5\"",
    religion: "Buddhist",
    smoking: false,
    drinking: "Rarely",
    drugs: false,
    datingIntent: "coParenting",
    reproductiveIntent: {
      searchingFor: "coParent",
      lookingFor: "coParentChild"
    },
    geneticTraits: {
      bloodType: "B-",
      recessiveCarrierTraits: [],
      fertilityIndicators: ["Normal"],
      familyHistory: ["Heart Disease"]
    },
    donorPreferences: {
      isDonor: true,
      donorType: "egg",
      coParentingInterest: true
    },
    children: {
      hasChildren: true,
      numberOfChildren: 1,
      wantsChildren: true,
      wantsMoreChildren: true
    }
  },
  {
    id: 8,
    name: "Nicky Runol",
    match: "85",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    age: "27",
    location: "Irvine, CA",
    info1: 'Straight, Single, 5"10',
    info2: "Tea Totaller, Loves Photography & Travel",
    info3: "Beaches, Mountain, Cafe, Movies",
    info4: "Last seen: 23h ago",
    isOnline: true,
    message:
      "And as for the television's so-called plan, Batman has no jurisdiction.",
    image: IMAGE_08,
    height: "5'10\"",
    religion: "Agnostic",
    smoking: false,
    drinking: "Socially",
    drugs: false,
    datingIntent: "serious",
    reproductiveIntent: {
      searchingFor: "sperm",
      lookingFor: "directDonor"
    },
    geneticTraits: {
      bloodType: "O+",
      recessiveCarrierTraits: ["Hemochromatosis"],
      fertilityIndicators: ["Normal"],
      familyHistory: ["Diabetes"]
    },
    donorPreferences: {
      isSeekingDonor: true,
      seekingDonorType: "sperm",
      coParentingInterest: false
    },
    children: {
      hasChildren: false,
      wantsChildren: true,
      wantsMoreChildren: false
    }
  },
  {
    id: 9,
    name: "Glenna Reichert",
    match: "74",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    isOnline: true,
    message:
      "This is what happens when an unstoppable force meets an immovable object.",
    image: IMAGE_09,
    location: "Denver, CO",
    height: "5'8\"",
    religion: "Protestant",
    smoking: false,
    drinking: "Socially",
    drugs: false,
    datingIntent: "marriage",
    reproductiveIntent: {
      searchingFor: "relationship",
      lookingFor: "marriageChild"
    },
    geneticTraits: {
      bloodType: "A+",
      recessiveCarrierTraits: [],
      fertilityIndicators: ["Normal"],
      familyHistory: ["Alzheimer's"]
    },
    donorPreferences: {
      coParentingInterest: false
    },
    children: {
      hasChildren: false,
      wantsChildren: true,
      wantsMoreChildren: false
    }
  },
  {
    id: 10,
    name: "Kurtis DuBuque",
    match: "98",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    isOnline: false,
    message:
      "You want order in Gotham. Batman must take off his mask and turn himself in.",
    image: IMAGE_10,
    location: "Portland, OR",
    height: "6'2\"",
    religion: "Atheist",
    smoking: false,
    drinking: "Regularly",
    drugs: false,
    datingIntent: "casual",
    reproductiveIntent: {
      searchingFor: "any",
      lookingFor: "any"
    },
    geneticTraits: {
      bloodType: "AB-",
      recessiveCarrierTraits: [],
      fertilityIndicators: ["Normal"],
      familyHistory: []
    },
    donorPreferences: {
      isDonor: false,
      coParentingInterest: false
    },
    children: {
      hasChildren: false,
      wantsChildren: false,
      wantsMoreChildren: false
    }
  },
];

export default data;
