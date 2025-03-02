export type CampaignData = {
  name: string;
  campaignId: number;
  startDate: string;
  endDate: string;
  exerciseAverages: ExerciseAverage[];
  assessors: Assessor[];
}

export type ExerciseAverage = {
  name: string;
  value: number;
  maxValue: number;
}

export type Assessor = {
  assessorName: string;
  assessorId: number;
  categoryData: Category[];
}

export type Category = {
  categoryName: string;
  sections: Section[];
}

export type Section = {
  sectionName: string;
  assessorData: AssessorData;
}

export type AssessorData = {
  value: number;
  maxValue: number;
}

//
// name: 'BP Test Campaign',
// campaignId: 1,
// startDate: '2020-01-01',
// endDate: '2020-01-31',
// // RW: exericse averges could likely be driven by the exercise data w/ computed signals, but for now, we'll just mock it
// exerciseAverages: [
//   {
//     name: 'presentation',
//     value: 0.98,
//     maxValue: 20,
//   },
//   {
//     name: 'group presentation',
//     value: 1.6,
//     maxValue: 15,
//   },
//   {
//     name: 'interview of somesort',
//     value: 1.5,
//     maxValue: 28,
//   },
//   {
//     name: 'written exercise',
//     value: 1.17,
//     maxValue: 15,
//   },
//   {
//     name: 'funky interview',
//     value: 2,
//     maxValue: 4,
//   },
//   {
//     name: 'strengths-based interview',
//     value: 0,
//     maxValue: 100,
//   },
//   {
//     name: 'in tray VS',
//     value: 0,
//     maxValue: 5,
//   },
//   {
//     name: 'data science test',
//     value: 0,
//     maxValue: 290,
//   },
//   {
//     name: 'UI test exericise',
//     value: 0,
//     maxValue: 5,
//   },
//   {
//     name: 'question ordering test',
//     value: 7,
//     maxValue: 10,
//   },
//   {
//     name: 'case-study written exercise',
//     value: 0,
//     maxValue: 5,
//   },
//   {
//     name: 'written exercise dec 23',
//     value: 0,
//     maxValue: 15,
//   },
//   {
//     name: 'fresh exercise - non-sequential scoring',
//     value: 64.05,
//     maxValue: 125,
//   },
// ],
// assessors: [
//   {
//     assessorName: 'Charlotte Hek',
//     assessorId: 1,
//     categoryData: {
//       categoryName: 'presentation',
//       sections: [
//         {
//           sectionName: 'Teamwork',
//           assessorData: {
//             value: 5,
//             maxValue: 5,
//           },
//         },
//         {
//           sectionName: 'Customer Focus',
//           assessorData:
//           {
//             value: 2,
//             maxValue: 5,
//           },
//         },
//         {
//           sectionName: 'Analytical Thinking',
//           assessorData:
//           {
//             value: 2.5,
//             maxValue: 5,
//           },

//         },
//         {
//           sectionName: 'Commerical Acumen',
//           assessorData:
//           {
//             value: 1,
//             maxValue: 5,
//           },
//         },
//       ]
//     },
//   },
//   {
//     assessorName: 'Lewis Whitehead',
//     assessorId: 2,
//     categoryData: {
//       categoryName: 'presentation',
//       sections: [
//         {
//           sectionName: 'Teamwork',
//           assessorData: {
//             value: 3.2,
//             maxValue: 5,
//           },
//         },
//         {
//           sectionName: 'Customer Focus',
//           assessorData:
//           {
//             value: 4.,
//             maxValue: 5,
//           },
//         },
//         {
//           sectionName: 'Analytical Thinking',
//           assessorData:
//           {
//             value: 3.8,
//             maxValue: 5,
//           },

//         },
//         {
//           sectionName: 'Commerical Acumen',
//           assessorData:
//           {
//             value: 2,
//             maxValue: 5,
//           },
//         },
//       ],
//     },
//   },
//   {
//     assessorName: 'Saeed Assessor',
//     assessorId: 2,
//     categoryData: {
//       categoryName: 'presentation',
//       sections: [
//         {
//           sectionName: 'Teamwork',
//           assessorData: {
//             value: 3,
//             maxValue: 5,
//           },
//         },
//         {
//           sectionName: 'Customer Focus',
//           assessorData:
//           {
//             value: 1,
//             maxValue: 5,
//           },
//         },
//         {
//           sectionName: 'Analytical Thinking',
//           assessorData:
//           {
//             value: 1.8,
//             maxValue: 5,
//           },

//         },
//         {
//           sectionName: 'Commerical Acumen',
//           assessorData:
//           {
//             value: 4.4,
//             maxValue: 5,
//           },
//         },
//       ],
//     },
//   },
// ]
// },
// {
// name: 'Campaign Test 2',
// campaignId: 2,
// startDate: '2020-01-01',
// endDate: '2020-01-31',
// exerciseAverages: [],
// assessors: [],
// }
