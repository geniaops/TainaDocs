// @ts-check

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // Main documentation sidebar
  documentationSidebar: [
    'intro',
    'plan',
    'documentation-gap-analysis',
    {
      type: 'category',
      label: 'Architecture',
      items: [
        {
          type: 'category',
          label: 'C4 Model',
          items: [
            'architecture/c4-model/2.1_Context_Diagram',
            'architecture/c4-model/2.2_Container_Diagram',
            'architecture/c4-model/2.3_Component_Diagram',
            'architecture/c4-model/2.4_Deployment_Diagram',
          ],
        },
        {
          type: 'category',
          label: 'Integration',
          items: [
            'architecture/integration/2.5_System_Integration',
            'architecture/integration/2.6_API_Flow_Diagrams',
          ],
        },
        {
          type: 'category',
          label: 'Data Collection',
          items: [
            'architecture/data-collection/2.9_Data_Collection_Overview',
            'architecture/data-collection/2.10_Data_Schema',
            'architecture/data-collection/2.11_Privacy_and_Security',
            'architecture/data-collection/2.12_Analytics_Capabilities',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Project Management',
      items: [
        {
          type: 'category',
          label: 'Use Cases',
          items: [
            'project-management/use-cases/3.1_Primary_Use_Cases',
            'project-management/use-cases/3.2_Edge_Cases',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Design',
      items: [
        {
          type: 'category',
          label: 'User Flows',
          items: [
            'design/user-flows/4.1_Conversation_Flow',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Testing',
      items: [
        'testing/5.1_Multilingual_Configuration',
      ],
    },
    {
      type: 'category',
      label: 'Implementation',
      items: [
        'implementation/6.1_Error_Handling_and_Recovery',
      ],
    },
  ],
};

module.exports = sidebars;
