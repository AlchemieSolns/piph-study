import qOne from './questionOne.png'
import qTwo from './questionTwo.png'
import qThree from './questionThree.png'
import qFour from './questionFour.png'
import qFive from './questionFive.png'
import qSix from './questionSix.png'
import qSeven from './questionSeven.png'

export interface q {
    config: string;
    iframe: boolean;
    title: string;
    img: string;
    altText: string;
}

export const questionData: q[] = [
    {
        config: "",
        iframe: false,
        title: "Part 1 Problem 1",
        img: qOne,
        altText: "A Lewis structure of a molecule with the chemical formula HCl. A Hydrogen is single bonded to a Chlorine. Chlorine has 3 lone pairs."
    },
    {
        config: "",
        iframe: false,
        title: "Part 1 Problem 2",
        img: qTwo,
        altText: "A Lewis structure of a molecule with the chemical formula H3O+. The central atom is Oxygen. Oxygen is single bonded to 3 Hydrogens. Oxygen has 1 lone pair and a labeled formal charge of +1."
        
    },
    {
        config: "",
        iframe: false,
        title: "Part 1 Problem 3",
        img: qThree,
        altText: "A Lewis structure of a molecule with the chemical formula CH5O. There are two central atoms, Oxygen and Carbon, that are single bonded to each other. The first central atom, Oxygen is single bonded to 2 Hydrogens. Oxygen has 1 lone pair. The second central atom, Carbon is single bonded to 3 Hydrogens."
        
    },
    {
        config: "a*H,H,H,H,N|c*4:1|b*4:1:1,4:2:1,4:3:1,4:0:1|p*-24.66:1.30,-14.66:11.30,-14.66:-8.70,-4.66:1.30,-14.66:1.30",
        iframe: true,
        title: "Part 2 Tutorial",
        img: qFour,
        altText: "A Lewis structure of a molecule with the chemical formula NH4+. The central atom is Nitrogen. Nitrogen is single bonded to 4 Hydrogens. Nitrogen has a labeled formal charge of +1."
        
    },
    {
        config: "a*C,Cl,H,O|lp*1:2|b*0:3:2,0:2:1,0:1:1|p*-8.78:4.78,1.22:4.78,-13.78:-3.88,-13.78:13.44",
        iframe: true,
        title: "Part 2 Problem 1",
        img: qFive,
        altText: "A Lewis structure of a molecule with the chemical formula CHClO. The central atom is Carbon. Carbon is single bonded to 1 Hydrogen, and 1 Chlorine, and double bonded to 1 Oxygen. The single bonded Chlorine has 2 lone pairs."
        
    },
    {
        config: "a*Al,O,O,O|lp*1:3,2:3,3:2|c*0:1|b*3:0:2,2:0:1,1:0:1|p*-2.16:-0.05,-10.82:4.95,6.50:4.95,-2.16:-10.05",
        iframe: true,
        title: "Part 2 Problem 2",
        img: qSix,
        altText: "A Lewis structure of a molecule with the chemical formula AlO3+. The central atom is Aluminum. Aluminum is single bonded to 2 Oxygens, and double bonded to 1 Oxygen. Aluminum has a labeled formal charge of +1. The single bonded Oxygens have 3 lone pairs each. The double bonded Oxygen has 2 lone pairs."
        
    },
    {
        config: "a*B,F,F,F,H,H,H,N|lp*1:3,2:3,3:3|c*0:-1,7:1|b*7:0:1,7:5:1,7:4:1,7:6:1,0:2:1,0:1:1,0:3:1|p*-4.32:0.63,-14.32:0.63,-4.32:10.63,-4.32:-9.37,5.68:10.63,15.68:0.63,5.68:-9.37,5.68:0.63",
        iframe: true,
        title: "Part 2 Problem 3",
        img: qSeven,
        altText: "A Lewis structure of a molecule with the chemical formula BF3H3N. There are two central atoms, Boron and Nitrogen, that are single bonded to each other. The first central atom, Boron is single bonded to 3 Fluorines. Boron has a labeled formal charge of -1. The single bonded Fluorines have 3 lone pairs each. The second central atom, Nitrogen is single bonded to 3 Hydrogens. Nitrogen has a labeled formal charge of +1."
        
    },
]