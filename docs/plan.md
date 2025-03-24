---
sidebar_position: 2
---

# AI for Citizenship: System Plan

## AI-based citizen interaction system

The "AI for Citizenship" project consists of developing an AI-based citizen interaction system that centralizes data collection and processing through intelligent kiosks. These kiosks, designed as "Pop-Ups," function as communication nodes with citizens, providing assistance, information, and personalized recommendations to users. The main purpose of this system is to enhance citizen participation in the development of the "Taína" Intelligent Government system.

These intelligent kiosks emerge at high-traffic points such as shopping centers, on digital platforms like Gob.do and the Citizen Folder app, and through the State Call Center. They function as sensors in capturing citizen interactions, storing this data for subsequent processing.

As users interact with the system, Taína collects this data to anticipate needs and provide service recommendations, answers to frequently asked questions, and contextual notifications for each solution. Ultimately, the purpose is for citizens to be able to process their services through Taína, which integrates a network of AI agents.

## Action Plan

### 1. Data collection and preparation

1. Collect all relevant call center data, including manuals and other essential documents.

For the Dominican Republic, we have identified two essential data sources, which will be provided by OGTIC through the cloud platform:

- **State Call Center CRM**: Manuals with information from public institutions, established procedures, and official responses, necessary to train the AI and ensure accurate citizen interactions aligned with protocols.
- **Call transcriptions**: Conversations converted from audio to text, structured in a database to develop machine learning models that predict demand and personalize virtual assistant services.
- **GOB.DO**: Single Portal of Dominican Government Services | www.gob.do

Example of conversations converted to Database Template to train the model:

| ID | Features | Label/Class | Description | Source |
|----|----------------|----------------|-------------|--------|
| 1 | [value1, value2, ...] | Class A | Description of case 1 | Source 1 |
| 2 | [value1, value2, ...] | Class B | Description of case 2 | Source 2 |
| 3 | [value1, value2, ...] | Class A | Description of case 3 | Source 3 |
| 4 | [value1, value2, ...] | Class C | Description of case 4 | Source 4 |

Column description:
- **ID**: Identifier for each entry
- **Features**: List of features or attributes of the data, which could be numerical or categorical values.
- **Label/Class**: The class or category to which the data belongs (for example, 'Complaints', 'Suggestions', 'Requested Information', 'Comments', 'Urgent', 'General Inquiry', 'Positive Feedback')
- **Description of the data or context**: (for example: Message received from a citizen reporting X incentive service because it lacks resources due to Y; requesting a prompt solution)
- **Source**: gob point, app/web (CitizenAI Platform), email, social networks, or phone call to the service center.

2. Store data securely in the OGTIC data center, ensuring compliance with data protection regulations.

The secure storage of data in the OGTIC data center is a fundamental pillar of the project.
- **Security and encryption**: Advanced standards such as AES will be implemented to protect data at rest and in transit, along with anonymization and pseudonymization techniques to safeguard privacy.
- **Access controls**: Multi-factor and biometric authentication will be established, in addition to strict protocols to prevent unauthorized access.

### 2. Development of the citizen interaction system

1. Train a virtual assistant using the collected data, serving as a communication channel to facilitate initial interaction with citizens.

To train Taína's virtual assistant, we identified that the existing data in the State Call Center CRM is an excellent starting point. This center receives an average of 150,000 calls monthly, providing a significant volume of data to model common interaction patterns and ensure that Taína responds effectively to citizens' needs.

The government has provided us with an example that illustrates the capabilities expected for the intelligent citizen interaction system.

As part of the implementation, there are also plans to deploy physical intelligent kiosks, known as "Pop-Ups #IAmFuture," in strategic, high-traffic locations such as shopping centers. These kiosks will be equipped with interactive systems that leverage AI to serve citizens autonomously and in real-time.

2. Conduct tests with real users to obtain feedback and evaluate the effectiveness of the assistant as a means of communication.

To evaluate Taína's effectiveness as a means of communication, we will conduct tests with real users in collaboration with the University of the Caribbean (UNICARIBE). UNICARIBE students will be selected as a representative group to interact with the system and provide valuable feedback on their experience.

### 3. Implementation and deployment

1. Implement the system across different channels, including:

- **Physical intelligent kiosks (Pop-Ups)**: Installed in shopping centers and other high-traffic locations, these kiosks will be equipped with touch screens and voice recognition systems to facilitate interaction with citizens.
- **Web platform (Gob.do)**: Integration of the virtual assistant in the single Dominican government services portal, allowing citizens to access assistance from any device with internet connection.
- **Mobile application (Citizen Folder)**: Incorporation of the assistant in the official government mobile application, facilitating access to services and assistance from mobile devices.
- **Call Center**: Implementation in the existing call center system, allowing human operators to collaborate with Taína to provide better service to citizens.

2. Establish key performance indicators (KPIs) based on user feedback, such as response accuracy and assistant response time.

| Beneficiary satisfaction | Operational efficiency | Data quality | Adoption and use |
|-----------------------------------|----------------------|------------------|---------------|
| -Customer Satisfaction Index (CSAT). <br/> -Net Promoter Score (NPS). | -System response time. <br/> -System availability rate. | -Data accuracy. <br/> -Data error rate. | -Number of active users. <br/> -Frequency of use. |

| Financial impact | Objective achievement | Security and compliance | Feedback and continuous improvement |
|--------------------|--------------------------|-----------------------|---------------------------|
| -Return on investment (ROI). <br/> -Cost per transaction. | -Milestone compliance. <br/> -Achievement of specific objectives. | -Number of security incidents. <br/> -Regulatory compliance. | -Number of improvement suggestions. <br/> -Implementation time for improvements. |

### 4. Analysis and continuous improvement

1. Analyze the collected data to identify patterns and trends in citizen interactions.

Data analysis is a fundamental part of the project, as it will allow us to:
- **Identify behavioral patterns**: Understand how citizens interact with the system and which services are most requested.
- **Detect areas for improvement**: Identify friction points in the user experience and opportunities to optimize the system.
- **Personalize the experience**: Adapt the assistant's responses and recommendations according to individual citizens' preferences and needs.

2. Use the insights obtained to continuously improve the system and adapt it to citizens' changing needs.

The continuous improvement of the system will be based on:
- **Direct feedback**: Comments and suggestions provided by users during their interactions with the system.
- **Metrics analysis**: Evaluation of established KPIs to identify areas for improvement and measure the impact of implemented changes.
- **Technological innovation**: Incorporation of new technologies and approaches to improve the system's effectiveness and efficiency.

## Expected Benefits

1. **Improvement in citizen experience**: Provide faster and more efficient access to government services, reducing wait times and simplifying processes.
2. **Resource optimization**: Reduce the workload on traditional citizen service channels, allowing officials to focus on more complex and higher value-added tasks.
3. **Collection of valuable data**: Obtain detailed information about citizens' needs and preferences, which will allow for continuous improvement of offered services.
4. **Digital inclusion**: Facilitate access to government services through multiple channels, including digital and physical options, to reach a greater number of citizens.

## Conclusion

The "Taína" AI-based citizen interaction system represents a significant advancement in the modernization of government services in the Dominican Republic. By centralizing data collection and processing through intelligent kiosks, the system will not only improve citizens' experience when interacting with the government but will also provide valuable information for decision-making and continuous improvement of public services.

The additional data collected will significantly improve Taína's ability to anticipate citizen demands and needs by identifying frequent patterns, personalizing services according to user behaviors and preferences, and optimizing responses based on context analysis enriched with open data. By integrating historical and real-time data, Taína will be able to offer proactive assistance, suggesting solutions before they are requested, while direct user feedback will allow for continuous adjustment of the system to make it more efficient and responsive.
