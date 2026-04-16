# 🚀 MIS Playwright Automation (Geo QA Test)

## 📌 Project Overview

This project is a **Playwright-based QA automation framework** designed to validate the core functionalities of the **Geo QA Test application**.

It focuses on:

* File upload workflows (CSV)
* Data validation (properties, stats, map)
* Negative and edge case handling
* End-to-end user flows

---

## 🎯 Key Features

* ✅ End-to-end automation using **Playwright**
* ✅ Structured test design with reusable selectors
* ✅ Environment-based configuration using `.env`
* ✅ File upload testing (drag & drop + file input)
* ✅ Positive, negative & edge case coverage
* ✅ Large dataset validation
* ✅ HTML reporting with Playwright
* 🔄 Extensible for Allure reporting & CI integration

---

## 📊 Test Coverage

### 📁 File Upload Scenarios

Scenario file attached as MIS-task1.xlsx

---

### 📋 Data Validation

* Uploaded filename visibility
* Properties list rendering
* Statistics panel validation (count, avg, etc.)
* Data persistence after refresh

---

### 🗺️ UI & Functional Validation

* Upload interaction (drag & drop / file input)
* Error message validation
* UI feedback and state changes

---

## ⚙️ Tech Stack

* **Playwright** – Test automation
* **TypeScript  – Test scripting
* **Node.js** – Runtime
* **dotenv** – Environment management

---

## 📂 Project Structure

```bash
qa-test/
├── file-upload-test-flows/
│   ├── csv-upload.spec.ts
│   ├── test-data/
│   └── ...
├── constant-specs/
│   └── selectors.ts
├── utils/
├── playwright.config.ts
├── package.json
└── .env
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/charuraghu01/MIS-playwright_automation.git
cd MIS-playwright_automation
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Configure Environment Variables

Create a `.env` file:

```env
LOGIN_EMAIL=
LOGIN_PASSWORD=
```

⚠️ Add `.env` to `.gitignore`

---

## ▶️ Running Tests

### 🔹 Run All Tests

```bash
npx playwright test
```

### 🔹 Run Specific Test

```bash
npx playwright test file-upload-test-flows/csv-upload.spec.ts
```

### 🔹 Run in headed mode

```bash
npx playwright test --headed
```

---

## 📊 Reporting

### 🔹 View HTML Report

```bash
npx playwright show-report
```

### 🔹 Features

* Test results (pass/fail)
* Screenshots on failure
* Execution traces
* Step-by-step debugging

---

## 🔐 Test Data Handling

* CSV files stored under `test-data/`
* Includes:

  * Valid dataset
  * Invalid template
  * Empty file
  * Large dataset (performance testing)

---

## ⚠️ Limitations & Trade-offs

* ⚠️ API validation 1 tc included, mostly UI based testing
* ⚠️ Map validation limited to UI presence (no geo verification yet)
* ⚠️ Cross-browser testing not fully implemented

---

## 🚀 Future Enhancements

* Add **Allure reporting with history tracking**
* Integrate **CI/CD (GitHub Actions)**
* Add **API validation**
* Improve **map coordinate validation**
* Add **data-driven testing**

---

## 🔄 Git Workflow

```bash
git checkout -b feature/new-feature
git add .
git commit -m "Add new test"
git push origin feature/new-feature
```

---

## 👩‍💻 Author

**Charumathi**

---

## 🎯 Final Thoughts

This framework demonstrates:

* Real-world QA automation scenarios
* Clean test structure and reusable components
* Strong coverage of file upload workflows

💬 Feel free to explore, run tests, and extend the framework!

🚀 Happy Testing!
