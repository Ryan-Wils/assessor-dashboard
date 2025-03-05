export const campaignData = [
  {
    name: 'BP Test Campaign',
    campaignId: 1,
    startDate: '2020-01-01',
    endDate: '2020-01-31',
    // RW: exericse averges could likely be driven by the exercise data w/ computed signals, but for now, we'll just mock it
    exerciseAverages: [
      {
        name: 'presentation',
        value: 75,
        color: 'oklch(0.768 0.233 130.85)',
        highlightColor: 'oklch(0.938 0.127 124.321)',
        id: 1,
      },
      {
        name: 'group presentation',
        value: 16,
        color: 'oklch(0.637 0.237 25.331)',
        highlightColor: 'oklch(0.885 0.062 18.334)',
        id: 2,
      },
      {
        name: 'interview of somesort',
        value: 51,
        color: 'oklch(0.705 0.213 47.604)',
        highlightColor: 'oklch(0.901 0.076 70.697)',
        id: 3,
      },
      {
        name: 'written exercise',
        value: 71,
        color: 'oklch(0.768 0.233 130.85)',
        highlightColor: 'oklch(0.938 0.127 124.321)',
        id: 4,
      },
      {
        name: 'funky interview',
        value: 20,
        color: 'oklch(0.637 0.237 25.331)',
        highlightColor: 'oklch(0.885 0.062 18.334)',
        id: 5,
      },
      {
        name: 'strengths-based interview',
        value: 42,
        color: 'oklch(0.705 0.213 47.604)',
        highlightColor: 'oklch(0.901 0.076 70.697)',
        id: 6,
      },
      {
        name: 'in tray VS',
        value: 33,
        color: 'oklch(0.705 0.213 47.604)',
        highlightColor: 'oklch(0.901 0.076 70.697)',
        id: 7,
      },
      {
        name: 'data science test',
        value: 10,
        color: 'oklch(0.637 0.237 25.331)',
        highlightColor: 'oklch(0.885 0.062 18.334)',
        id: 8,
      },
      {
        name: 'UI test exericise',
        value: 95,
        color: 'oklch(0.768 0.233 130.85)',
        highlightColor: 'oklch(0.938 0.127 124.321)',
        id: 9,
      },
      {
        name: 'question ordering test',
        value: 17,
        color: 'oklch(0.637 0.237 25.331)',
        highlightColor: 'oklch(0.885 0.062 18.334)',
        id: 10,
      },
      {
        name: 'case-study written exercise',
        value: 27,
        color: 'oklch(0.637 0.237 25.331)',
        highlightColor: 'oklch(0.885 0.062 18.334)',
        id: 11,
      },
      {
        name: 'written exercise dec 23',
        value: 83,
        color: 'oklch(0.768 0.233 130.85)',
        highlightColor: 'oklch(0.938 0.127 124.321)',
        id: 12,
      },
      {
        name: 'fresh exercise - non-sequential scoring',
        value: 64,
        color: 'oklch(0.705 0.213 47.604)',
        highlightColor: 'oklch(0.901 0.076 70.697)',
        id: 13,
      },
    ],
    assessors: [
      {
        assessorName: 'Charlotte Hek',
        assessorId: 1,
        categoryData: [
          {
            categoryName: 'presentation',
            sections: [
              {
                sectionName: 'Teamwork',
                assessorData: {
                  value: 1.3,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'Customer Focus',
                assessorData:
                {
                  value: 2,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'Analytical Thinking',
                assessorData:
                {
                  value: 2.5,
                  maxValue: 5,
                },

              },
              {
                sectionName: 'Commerical Acumen',
                assessorData:
                {
                  value: 1,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'Team Building',
                assessorData:
                {
                  value: 2,
                  maxValue: 5,
                },
              },
            ]
          },
          {
            categoryName: 'group presentation',
            sections: [
              {
                sectionName: 'Customer focus',
                assessorData: {
                  value: 1.3,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'Problem solving',
                assessorData:
                {
                  value: 4.2,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'Self awareness',
                assessorData:
                {
                  value: 1.5,
                  maxValue: 5,
                },

              },
              {
                sectionName: 'Engagement',
                assessorData:
                {
                  value: 1.1,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'leadership',
                assessorData:
                {
                  value: 4.5,
                  maxValue: 5,
                },
              },
            ]
          },
          {
            categoryName: 'Written',
            sections: [
              {
                sectionName: 'Customer focus',
                assessorData: {
                  value: 4.3,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'Problem solving',
                assessorData:
                {
                  value: 4.4,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'Self awareness',
                assessorData:
                {
                  value: 0.5,
                  maxValue: 5,
                },

              },
              {
                sectionName: 'Engagement',
                assessorData:
                {
                  value: 1.3,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'leadership',
                assessorData:
                {
                  value: 2.5,
                  maxValue: 5,
                },
              },
            ]
          },
          {
            categoryName: 'Strengths-based interview',
            sections: [
              {
                sectionName: 'Customer focus',
                assessorData: {
                  value: 0.3,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'Problem solving',
                assessorData:
                {
                  value: 1.4,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'Self awareness',
                assessorData:
                {
                  value: 1.5,
                  maxValue: 5,
                },

              },
              {
                sectionName: 'Engagement',
                assessorData:
                {
                  value: 5,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'leadership',
                assessorData:
                {
                  value: 2,
                  maxValue: 5,
                },
              },
            ]
          },
          {
            categoryName: 'Interview',
            sections: [
              {
                sectionName: 'Customer focus',
                assessorData: {
                  value: 2.3,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'Problem solving',
                assessorData:
                {
                  value: 4,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'Self awareness',
                assessorData:
                {
                  value: 4.5,
                  maxValue: 5,
                },

              },
              {
                sectionName: 'Engagement',
                assessorData:
                {
                  value: 3,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'leadership',
                assessorData:
                {
                  value: 5,
                  maxValue: 5,
                },
              },
            ]
          }, {
            categoryName: 'Data Science Test',
            sections: [
              {
                sectionName: 'Customer focus',
                assessorData: {
                  value: 3.3,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'Problem solving',
                assessorData:
                {
                  value: 4.6,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'Self awareness',
                assessorData:
                {
                  value: 1.5,
                  maxValue: 5,
                },

              },
              {
                sectionName: 'Engagement',
                assessorData:
                {
                  value: 2.3,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'leadership',
                assessorData:
                {
                  value: 3.8,
                  maxValue: 5,
                },
              },
            ]
          }, {
            categoryName: 'Case Study',
            sections: [
              {
                sectionName: 'Customer focus',
                assessorData: {
                  value: 3.3,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'Problem solving',
                assessorData:
                {
                  value: 2,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'Self awareness',
                assessorData:
                {
                  value: 5,
                  maxValue: 5,
                },

              },
              {
                sectionName: 'Engagement',
                assessorData:
                {
                  value: 1,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'leadership',
                assessorData:
                {
                  value: 4,
                  maxValue: 5,
                },
              },
            ]
          }, {
            categoryName: 'Statistics',
            sections: [
              {
                sectionName: 'Customer focus',
                assessorData: {
                  value: 2.8,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'Problem solving',
                assessorData:
                {
                  value: 2.6,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'Self awareness',
                assessorData:
                {
                  value: 1.5,
                  maxValue: 5,
                },

              },
              {
                sectionName: 'Engagement',
                assessorData:
                {
                  value: 2,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'leadership',
                assessorData:
                {
                  value: 1,
                  maxValue: 5,
                },
              },
            ]
          },
        ]
      },
      {
        assessorName: 'Lewis Whitehead',
        assessorId: 2,
        categoryData: [
          {
            categoryName: 'presentation',
            sections: [
              {
                sectionName: 'Teamwork',
                assessorData: {
                  value: 3.2,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'Customer Focus',
                assessorData:
                {
                  value: 4,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'Analytical Thinking',
                assessorData:
                {
                  value: 3.8,
                  maxValue: 5,
                },

              },
              {
                sectionName: 'Commerical Acumen',
                assessorData:
                {
                  value: 2,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'Team Building',
                assessorData:
                {
                  value: 2,
                  maxValue: 5,
                },
              },
            ],
          },{
            categoryName: 'group presentation',
            sections: [
              {
                sectionName: 'Customer focus',
                assessorData: {
                  value: 1.3,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'Problem solving',
                assessorData:
                {
                  value: 4.2,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'Self awareness',
                assessorData:
                {
                  value: 1.5,
                  maxValue: 5,
                },

              },
              {
                sectionName: 'Engagement',
                assessorData:
                {
                  value: 1.1,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'leadership',
                assessorData:
                {
                  value: 4.5,
                  maxValue: 5,
                },
              },
            ]
          }, {
            categoryName: 'Written',
            sections: [
              {
                sectionName: 'Customer focus',
                assessorData: {
                  value: 4.3,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'Problem solving',
                assessorData:
                {
                  value: 4.4,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'Self awareness',
                assessorData:
                {
                  value: 0.5,
                  maxValue: 5,
                },

              },
              {
                sectionName: 'Engagement',
                assessorData:
                {
                  value: 1.3,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'leadership',
                assessorData:
                {
                  value: 2.5,
                  maxValue: 5,
                },
              },
            ]
          },
          {
            categoryName: 'Strengths-based interview',
            sections: [
              {
                sectionName: 'Customer focus',
                assessorData: {
                  value: 0.3,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'Problem solving',
                assessorData:
                {
                  value: 1.4,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'Self awareness',
                assessorData:
                {
                  value: 1.5,
                  maxValue: 5,
                },

              },
              {
                sectionName: 'Engagement',
                assessorData:
                {
                  value: 5,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'leadership',
                assessorData:
                {
                  value: 2,
                  maxValue: 5,
                },
              },
            ]
          }, {
            categoryName: 'Data Science Test',
            sections: [
              {
                sectionName: 'Customer focus',
                assessorData: {
                  value: 3.3,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'Problem solving',
                assessorData:
                {
                  value: 4.6,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'Self awareness',
                assessorData:
                {
                  value: 1.5,
                  maxValue: 5,
                },

              },
              {
                sectionName: 'Engagement',
                assessorData:
                {
                  value: 2.3,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'leadership',
                assessorData:
                {
                  value: 3.8,
                  maxValue: 5,
                },
              },
            ]
          }, {
            categoryName: 'Case Study',
            sections: [
              {
                sectionName: 'Customer focus',
                assessorData: {
                  value: 3.3,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'Problem solving',
                assessorData:
                {
                  value: 2,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'Self awareness',
                assessorData:
                {
                  value: 5,
                  maxValue: 5,
                },

              },
              {
                sectionName: 'Engagement',
                assessorData:
                {
                  value: 1,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'leadership',
                assessorData:
                {
                  value: 4,
                  maxValue: 5,
                },
              },
            ]
          },
          {
            categoryName: 'Interview',
            sections: [
              {
                sectionName: 'Customer focus',
                assessorData: {
                  value: 2.3,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'Problem solving',
                assessorData:
                {
                  value: 4,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'Self awareness',
                assessorData:
                {
                  value: 4.5,
                  maxValue: 5,
                },

              },
              {
                sectionName: 'Engagement',
                assessorData:
                {
                  value: 3,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'leadership',
                assessorData:
                {
                  value: 5,
                  maxValue: 5,
                },
              },
            ]
          }, {
            categoryName: 'Data Science Test',
            sections: [
              {
                sectionName: 'Customer focus',
                assessorData: {
                  value: 3.3,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'Problem solving',
                assessorData:
                {
                  value: 4.6,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'Self awareness',
                assessorData:
                {
                  value: 1.5,
                  maxValue: 5,
                },

              },
              {
                sectionName: 'Engagement',
                assessorData:
                {
                  value: 2.3,
                  maxValue: 5,
                },
              },
              {
                sectionName: 'leadership',
                assessorData:
                {
                  value: 3.8,
                  maxValue: 5,
                },
              },
            ]
          },
        ]
      },
      {
        assessorName: 'Saeed Assessor',
        assessorId: 3,
        categoryData: [{
          categoryName: 'presentation',
          sections: [
            {
              sectionName: 'Teamwork',
              assessorData: {
                value: 3,
                maxValue: 5,
              },
            },
            {
              sectionName: 'Customer Focus',
              assessorData:
              {
                value: 1,
                maxValue: 5,
              },
            },
            {
              sectionName: 'Analytical Thinking',
              assessorData:
              {
                value: 1.8,
                maxValue: 5,
              },

            },
            {
              sectionName: 'Commerical Acumen',
              assessorData:
              {
                value: 4.4,
                maxValue: 5,
              },
            },
            {
              sectionName: 'Team Building',
              assessorData:
              {
                value: 2,
                maxValue: 5,
              },
            },
          ],
        }, {
          categoryName: 'Data Science Test',
          sections: [
            {
              sectionName: 'Customer focus',
              assessorData: {
                value: 3.3,
                maxValue: 5,
              },
            },
            {
              sectionName: 'Problem solving',
              assessorData:
              {
                value: 4.6,
                maxValue: 5,
              },
            },
            {
              sectionName: 'Self awareness',
              assessorData:
              {
                value: 1.5,
                maxValue: 5,
              },

            },
            {
              sectionName: 'Engagement',
              assessorData:
              {
                value: 2.3,
                maxValue: 5,
              },
            },
            {
              sectionName: 'leadership',
              assessorData:
              {
                value: 3.8,
                maxValue: 5,
              },
            },
          ]
        },{
          categoryName: 'Case Study',
          sections: [
            {
              sectionName: 'Customer focus',
              assessorData: {
                value: 3.3,
                maxValue: 5,
              },
            },
            {
              sectionName: 'Problem solving',
              assessorData:
              {
                value: 2,
                maxValue: 5,
              },
            },
            {
              sectionName: 'Self awareness',
              assessorData:
              {
                value: 5,
                maxValue: 5,
              },

            },
            {
              sectionName: 'Engagement',
              assessorData:
              {
                value: 1,
                maxValue: 5,
              },
            },
            {
              sectionName: 'leadership',
              assessorData:
              {
                value: 4,
                maxValue: 5,
              },
            },
          ]
        },
        {
          categoryName: 'Interview',
          sections: [
            {
              sectionName: 'Customer focus',
              assessorData: {
                value: 2.3,
                maxValue: 5,
              },
            },
            {
              sectionName: 'Problem solving',
              assessorData:
              {
                value: 4,
                maxValue: 5,
              },
            },
            {
              sectionName: 'Self awareness',
              assessorData:
              {
                value: 4.5,
                maxValue: 5,
              },

            },
            {
              sectionName: 'Engagement',
              assessorData:
              {
                value: 3,
                maxValue: 5,
              },
            },
            {
              sectionName: 'leadership',
              assessorData:
              {
                value: 5,
                maxValue: 5,
              },
            },
          ]
        },
        ]
      },
      {
        assessorName: 'Candidate 1',
        assessorId: 4,
        categoryData: [],
      },
      {
        assessorName: 'Candidate 2',
        assessorId: 5,
        categoryData: [],
      },
      {
        assessorName: 'Candidate 3',
        assessorId: 6,
        categoryData: [],
      },
      {
        assessorName: 'Candidate 4',
        assessorId: 7,
        categoryData: [],
      },
      {
        assessorName: 'Candidate 5',
        assessorId: 8,
        categoryData: [],
      },

    ]
  },
  {
    name: 'Campaign Test 2',
    campaignId: 2,
    startDate: '2020-01-01',
    endDate: '2020-01-31',
    exerciseAverages: [],
    assessors: [],
  }
]
