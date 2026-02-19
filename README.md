# capm_ex3_learningmanagementsystem

Student Learning Management System - Udemy practice project

## Getting Started

This is a CAP (Cloud Application Programming) project with a Student Management service.

Project structure:
- **app/** - UI5 Fiori applications
- **db/** - Data models (Students entity)
- **srv/** - OData services

## Development

Run locally with:
```
npm install
cds watch
```

Then access the application at http://localhost:4004

## Deployment to SAP BTP

```
npm install
npx cds build --production
mbt build
cf deploy mta_archives/capm_ex3_learningmanagementsystem_1.0.0.mtar
```

For more information, see the [CAP Documentation](https://cap.cloud.sap/docs/get-started/)
