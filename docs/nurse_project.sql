-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 07, 2018 at 06:02 PM
-- Server version: 10.1.9-MariaDB
-- PHP Version: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nurse_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact_patient_info`
--

CREATE TABLE `contact_patient_info` (
  `id` int(11) NOT NULL,
  `home_number` varchar(50) DEFAULT NULL,
  `work_number` varchar(50) DEFAULT NULL,
  `patient_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `forms`
--

CREATE TABLE `forms` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `forms`
--

INSERT INTO `forms` (`id`, `name`) VALUES
(1, 'Minnesota'),
(2, 'CDC'),
(3, 'Washington');

-- --------------------------------------------------------

--
-- Table structure for table `minnesota`
--

CREATE TABLE `minnesota` (
  `id` int(11) NOT NULL,
  `medical_record_number` varchar(100) DEFAULT NULL,
  `disease` varchar(100) DEFAULT NULL,
  `status` varchar(100) DEFAULT NULL,
  `date_of_onset` varchar(100) DEFAULT NULL,
  `date_reported_to_MDH` varchar(100) DEFAULT NULL,
  `lab_findings` varchar(100) DEFAULT NULL,
  `source` varchar(100) DEFAULT NULL,
  `specimen_collection_date` varchar(100) DEFAULT NULL,
  `date_of_result` varchar(100) DEFAULT NULL,
  `lab_facility` varchar(100) DEFAULT NULL,
  `lab_facility_phone` varchar(100) DEFAULT NULL,
  `physician` varchar(100) DEFAULT NULL,
  `physician_phone` varchar(100) DEFAULT NULL,
  `person_reporting` varchar(100) DEFAULT NULL,
  `person_reporting_phone` varchar(100) DEFAULT NULL,
  `patient_hospitalized` varchar(20) DEFAULT NULL,
  `patient_hospitalized_where` varchar(100) DEFAULT NULL,
  `admission_date` varchar(100) DEFAULT NULL,
  `discharge_date` varchar(100) DEFAULT NULL,
  `patient_died` varchar(100) DEFAULT NULL,
  `patient_died_date` varchar(100) DEFAULT NULL,
  `patient_foodhandler` varchar(100) DEFAULT NULL,
  `patient_contact` varchar(100) DEFAULT NULL,
  `pregnant` varchar(100) DEFAULT NULL,
  `due_date` varchar(100) DEFAULT NULL,
  `delivery_hospital` varchar(100) DEFAULT NULL,
  `office_CDCDEF` varchar(100) DEFAULT NULL,
  `office_ID` varchar(100) DEFAULT NULL,
  `id_patient` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `minnesota`
--

INSERT INTO `minnesota` (`id`, `medical_record_number`, `disease`, `status`, `date_of_onset`, `date_reported_to_MDH`, `lab_findings`, `source`, `specimen_collection_date`, `date_of_result`, `lab_facility`, `lab_facility_phone`, `physician`, `physician_phone`, `person_reporting`, `person_reporting_phone`, `patient_hospitalized`, `patient_hospitalized_where`, `admission_date`, `discharge_date`, `patient_died`, `patient_died_date`, `patient_foodhandler`, `patient_contact`, `pregnant`, `due_date`, `delivery_hospital`, `office_CDCDEF`, `office_ID`, `id_patient`) VALUES
(1, '26565544', 'FLU Updated Disease', 'Case', '62', 'lk', 'hb', 'hb', 'kn', 'kjn', 'aze', 'azear', 'aer', 'azrear', 'azrr', 'saaz', 'Y', 'feza', 'aze', 'fef', 'U', 'zar', 'N', 'Y', 'Y', 'azr', 'sxqsd', 'rzads', 'azrear', 1),
(2, 'frz', 'ih', NULL, 'iuh', 'oh', 'oh', 'ouh', 'ouh', 'ouh', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2),
(3, '265', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `optional_household`
--

CREATE TABLE `optional_household` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `relationship` varchar(100) DEFAULT NULL,
  `age` varchar(100) DEFAULT NULL,
  `three` varchar(100) DEFAULT NULL,
  `temperature` varchar(100) DEFAULT NULL,
  `cough` varchar(100) DEFAULT NULL,
  `sore_throat` varchar(100) DEFAULT NULL,
  `diarrhea` varchar(100) DEFAULT NULL,
  `onset` varchar(100) DEFAULT NULL,
  `washington_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `optional_travel`
--

CREATE TABLE `optional_travel` (
  `id` int(11) NOT NULL,
  `dates` varchar(100) DEFAULT NULL,
  `cities` varchar(100) DEFAULT NULL,
  `number` varchar(100) DEFAULT NULL,
  `contacts` varchar(100) DEFAULT NULL,
  `washington_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `patients`
--

CREATE TABLE `patients` (
  `id` int(11) NOT NULL,
  `code` varchar(100) NOT NULL,
  `date_of_birth` date DEFAULT NULL,
  `ethnicity` varchar(50) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `state` varchar(50) DEFAULT NULL,
  `zip` varchar(50) DEFAULT NULL,
  `occupation` varchar(50) DEFAULT NULL,
  `place_work` varchar(50) DEFAULT NULL,
  `zip_code_work` varchar(50) DEFAULT NULL,
  `phone_work` varchar(50) DEFAULT NULL,
  `grade` varchar(50) DEFAULT NULL,
  `emplyer` varchar(50) DEFAULT NULL,
  `school` varchar(50) DEFAULT NULL,
  `child_care` varchar(50) DEFAULT NULL,
  `alt_contact` varchar(50) DEFAULT NULL,
  `name_alt_contact` varchar(50) DEFAULT NULL,
  `sex` varchar(50) DEFAULT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `isHomeless` tinyint(1) DEFAULT NULL,
  `language` varchar(50) DEFAULT NULL,
  `age` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `patients`
--

INSERT INTO `patients` (`id`, `code`, `date_of_birth`, `ethnicity`, `address`, `country`, `phone`, `city`, `state`, `zip`, `occupation`, `place_work`, `zip_code_work`, `phone_work`, `grade`, `emplyer`, `school`, `child_care`, `alt_contact`, `name_alt_contact`, `sex`, `first_name`, `last_name`, `email`, `isHomeless`, `language`, `age`) VALUES
(1, '8700TPM5583Z', '2018-02-08', 'Hispanic', 'America San Francesco', 'Minisota', '5058854', 'Texas', 'LA', '2080', 'Professor', 'University Havard', '4080', '50885247', 'Hight level', NULL, NULL, NULL, NULL, NULL, 'Male', 'Cedric', 'Flamborie', NULL, NULL, NULL, NULL),
(2, '2485AZR2258Z', '2018-03-07', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Cedric', 'Potter', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `race`
--

CREATE TABLE `race` (
  `id` int(11) NOT NULL,
  `race` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `race`
--

INSERT INTO `race` (`id`, `race`) VALUES
(1, 'White'),
(2, 'Black'),
(3, 'American'),
(4, 'Native Hawaiian'),
(5, 'Asian'),
(6, 'Alaskan Native'),
(7, 'Indian'),
(8, 'African'),
(9, 'Unknown'),
(10, 'Other'),
(11, 'Other Pacific Islander');

-- --------------------------------------------------------

--
-- Table structure for table `race_patient`
--

CREATE TABLE `race_patient` (
  `id` int(11) NOT NULL,
  `id_patient` int(11) DEFAULT NULL,
  `id_race` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `race_patient`
--

INSERT INTO `race_patient` (`id`, `id_patient`, `id_race`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 4);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `login` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `login`, `password`) VALUES
(1, 'firas', '23648096');

-- --------------------------------------------------------

--
-- Table structure for table `washington`
--

CREATE TABLE `washington` (
  `id` int(11) NOT NULL,
  `lhj_use_id` varchar(100) DEFAULT NULL,
  `reported_doh` tinyint(1) DEFAULT NULL,
  `reported_doh_date` varchar(100) DEFAULT NULL,
  `confirmed` tinyint(1) DEFAULT NULL,
  `confirmed_by` varchar(100) DEFAULT NULL,
  `epi` tinyint(1) DEFAULT NULL,
  `epi_link` varchar(100) DEFAULT NULL,
  `outbreak_related` tinyint(1) DEFAULT NULL,
  `cluster_id` varchar(100) DEFAULT NULL,
  `cluster_name` varchar(100) DEFAULT NULL,
  `phl_lab` varchar(100) DEFAULT NULL,
  `doh_outbreak` varchar(100) DEFAULT NULL,
  `county` varchar(100) DEFAULT NULL,
  `notification_date` varchar(100) DEFAULT NULL,
  `start_date` varchar(100) DEFAULT NULL,
  `reporter` varchar(100) DEFAULT NULL,
  `talk_case` varchar(100) DEFAULT NULL,
  `date_interview` varchar(100) DEFAULT NULL,
  `reporter_name` varchar(100) DEFAULT NULL,
  `reporter_phone` varchar(100) DEFAULT NULL,
  `hcp_name` varchar(100) DEFAULT NULL,
  `hcp_phone` varchar(100) DEFAULT NULL,
  `onset_date` varchar(100) DEFAULT NULL,
  `derived` varchar(100) DEFAULT NULL,
  `diagnosis_date` varchar(100) DEFAULT NULL,
  `illness_duration` varchar(100) DEFAULT NULL,
  `fever` varchar(100) DEFAULT NULL,
  `fever_temp` varchar(100) DEFAULT NULL,
  `cough` varchar(100) DEFAULT NULL,
  `cough_onset_date` varchar(100) DEFAULT NULL,
  `sore_throat` varchar(100) DEFAULT NULL,
  `shortness_breath` varchar(100) DEFAULT NULL,
  `vomiting` varchar(100) DEFAULT NULL,
  `diarrhea` varchar(100) DEFAULT NULL,
  `hospitalized` varchar(100) DEFAULT NULL,
  `hospital_name` varchar(100) DEFAULT NULL,
  `admit_date` varchar(100) DEFAULT NULL,
  `discharge_date` varchar(100) DEFAULT NULL,
  `died_illness` varchar(100) DEFAULT NULL,
  `death_date` varchar(100) DEFAULT NULL,
  `healthcare` varchar(100) DEFAULT NULL,
  `autopsy` varchar(100) DEFAULT NULL,
  `specimens` tinyint(1) DEFAULT NULL,
  `specimens_available` varchar(100) DEFAULT NULL,
  `influenza_vaccine` varchar(100) DEFAULT NULL,
  `doses` varchar(100) DEFAULT NULL,
  `date_shot_spray` varchar(100) DEFAULT NULL,
  `current_condition` varchar(100) DEFAULT NULL,
  `current_condition_text` varchar(100) DEFAULT NULL,
  `smoker` tinyint(1) DEFAULT NULL,
  `alcohol` tinyint(1) DEFAULT NULL,
  `chemotherapy` tinyint(1) DEFAULT NULL,
  `neuromuscular` tinyint(1) DEFAULT NULL,
  `steroid_therapy` tinyint(1) DEFAULT NULL,
  `organ_transplant` tinyint(1) DEFAULT NULL,
  `hiv_aids` tinyint(1) DEFAULT NULL,
  `chronic_liver` tinyint(1) DEFAULT NULL,
  `cancer_past` tinyint(1) DEFAULT NULL,
  `chronic_heart` tinyint(1) DEFAULT NULL,
  `asthma` tinyint(1) DEFAULT NULL,
  `chronic_lung` tinyint(1) DEFAULT NULL,
  `diabetes` tinyint(1) DEFAULT NULL,
  `chronic_kidney` tinyint(1) DEFAULT NULL,
  `cognitive` tinyint(1) DEFAULT NULL,
  `hemoglobinopathy` tinyint(1) DEFAULT NULL,
  `obesity` tinyint(1) DEFAULT NULL,
  `other` tinyint(1) DEFAULT NULL,
  `other_text` varchar(100) DEFAULT NULL,
  `ht` varchar(50) DEFAULT NULL,
  `wt` varchar(50) DEFAULT NULL,
  `pregnant` varchar(100) DEFAULT NULL,
  `weeks` varchar(100) DEFAULT NULL,
  `outcome` varchar(100) DEFAULT NULL,
  `pneumonia` varchar(100) DEFAULT NULL,
  `acute_respiratory` varchar(100) DEFAULT NULL,
  `intensive_care` varchar(100) DEFAULT NULL,
  `mechanical_ventilation` varchar(100) DEFAULT NULL,
  `antiviral_medications` varchar(100) DEFAULT NULL,
  `type_1` varchar(100) DEFAULT NULL,
  `type_1_started` varchar(100) DEFAULT NULL,
  `type_1_stopped` varchar(100) DEFAULT NULL,
  `type_2` varchar(100) DEFAULT NULL,
  `type_2_started` varchar(100) DEFAULT NULL,
  `type_2_stopped` varchar(100) DEFAULT NULL,
  `eia` varchar(100) DEFAULT NULL,
  `eia_test` varchar(100) DEFAULT NULL,
  `eia_date` varchar(100) DEFAULT NULL,
  `eia_specimen` varchar(100) DEFAULT NULL,
  `pcr` varchar(100) DEFAULT NULL,
  `pcr_test` varchar(100) DEFAULT NULL,
  `pcr_lab` varchar(100) DEFAULT NULL,
  `pcr_date` varchar(100) DEFAULT NULL,
  `pcr_specimen` varchar(100) DEFAULT NULL,
  `culture` varchar(100) DEFAULT NULL,
  `culture_test` varchar(100) DEFAULT NULL,
  `culture_date` varchar(100) DEFAULT NULL,
  `culture_specimen` varchar(100) DEFAULT NULL,
  `dfa` varchar(100) DEFAULT NULL,
  `dfa_test` varchar(100) DEFAULT NULL,
  `dfa_date` varchar(100) DEFAULT NULL,
  `dfa_specimen` varchar(100) DEFAULT NULL,
  `bacterial` varchar(100) DEFAULT NULL,
  `bacterial_date` varchar(100) DEFAULT NULL,
  `bacterial_specimen` varchar(100) DEFAULT NULL,
  `result` varchar(100) DEFAULT NULL,
  `other_result` varchar(100) DEFAULT NULL,
  `lhj_species` varchar(100) DEFAULT NULL,
  `lhj_serotype` varchar(100) DEFAULT NULL,
  `case_name` varchar(100) DEFAULT NULL,
  `days_from_onset` varchar(100) DEFAULT NULL,
  `calendar_dates` varchar(100) DEFAULT NULL,
  `travel_area` varchar(100) DEFAULT NULL,
  `travel_state` varchar(100) DEFAULT NULL,
  `out_of` varchar(100) DEFAULT NULL,
  `dates_locations` varchar(100) DEFAULT NULL,
  `number_people` varchar(100) DEFAULT NULL,
  `number_people_text` varchar(100) DEFAULT NULL,
  `contact` varchar(100) DEFAULT NULL,
  `health_care` varchar(100) DEFAULT NULL,
  `patient_interviewed` tinyint(1) DEFAULT NULL,
  `no_risk` tinyint(1) DEFAULT NULL,
  `probably_occur` varchar(100) DEFAULT NULL,
  `probably_occur_country` varchar(100) DEFAULT NULL,
  `exposure_details` varchar(100) DEFAULT NULL,
  `health_care_setting` varchar(100) DEFAULT NULL,
  `health_exposure` varchar(100) DEFAULT NULL,
  `health_setting` varchar(100) DEFAULT NULL,
  `health_setting_other` varchar(100) DEFAULT NULL,
  `congregate` varchar(100) DEFAULT NULL,
  `congregate_living` varchar(100) DEFAULT NULL,
  `congregate_living_other` varchar(100) DEFAULT NULL,
  `poultry` varchar(100) DEFAULT NULL,
  `poultry_type` varchar(100) DEFAULT NULL,
  `poultry_type_other` varchar(100) DEFAULT NULL,
  `poultry_animals` varchar(100) DEFAULT NULL,
  `poultry_description` varchar(100) DEFAULT NULL,
  `nosocomial` varchar(100) DEFAULT NULL,
  `work` varchar(100) DEFAULT NULL,
  `facility_name` varchar(100) DEFAULT NULL,
  `close_contact` varchar(100) DEFAULT NULL,
  `outbreak` tinyint(1) DEFAULT NULL,
  `home_isolation` tinyint(1) DEFAULT NULL,
  `home_isolation_date` varchar(100) DEFAULT NULL,
  `contact_quarantine` tinyint(1) DEFAULT NULL,
  `contact_number` varchar(100) DEFAULT NULL,
  `facility_notified` tinyint(1) DEFAULT NULL,
  `notes` varchar(100) DEFAULT NULL,
  `investigator` varchar(100) DEFAULT NULL,
  `investigator_phone` varchar(100) DEFAULT NULL,
  `local_health` varchar(100) DEFAULT NULL,
  `complete_date` varchar(100) DEFAULT NULL,
  `record_date` varchar(100) DEFAULT NULL,
  `patient_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact_patient_info`
--
ALTER TABLE `contact_patient_info`
  ADD PRIMARY KEY (`id`),
  ADD KEY `patient_id` (`patient_id`);

--
-- Indexes for table `forms`
--
ALTER TABLE `forms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `minnesota`
--
ALTER TABLE `minnesota`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_patient` (`id_patient`);

--
-- Indexes for table `optional_household`
--
ALTER TABLE `optional_household`
  ADD PRIMARY KEY (`id`),
  ADD KEY `washington_id` (`washington_id`);

--
-- Indexes for table `optional_travel`
--
ALTER TABLE `optional_travel`
  ADD PRIMARY KEY (`id`),
  ADD KEY `washington_id` (`washington_id`);

--
-- Indexes for table `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `race`
--
ALTER TABLE `race`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `race_patient`
--
ALTER TABLE `race_patient`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_patient` (`id_patient`),
  ADD KEY `id_race` (`id_race`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `washington`
--
ALTER TABLE `washington`
  ADD PRIMARY KEY (`id`),
  ADD KEY `patient_id` (`patient_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact_patient_info`
--
ALTER TABLE `contact_patient_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `forms`
--
ALTER TABLE `forms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `minnesota`
--
ALTER TABLE `minnesota`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `optional_household`
--
ALTER TABLE `optional_household`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `optional_travel`
--
ALTER TABLE `optional_travel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `patients`
--
ALTER TABLE `patients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `race`
--
ALTER TABLE `race`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `race_patient`
--
ALTER TABLE `race_patient`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `washington`
--
ALTER TABLE `washington`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `contact_patient_info`
--
ALTER TABLE `contact_patient_info`
  ADD CONSTRAINT `contact_patient_info_ibfk_1` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`id`);

--
-- Constraints for table `minnesota`
--
ALTER TABLE `minnesota`
  ADD CONSTRAINT `minnesota_ibfk_1` FOREIGN KEY (`id_patient`) REFERENCES `patients` (`id`);

--
-- Constraints for table `optional_household`
--
ALTER TABLE `optional_household`
  ADD CONSTRAINT `optional_household_ibfk_1` FOREIGN KEY (`washington_id`) REFERENCES `washington` (`id`);

--
-- Constraints for table `optional_travel`
--
ALTER TABLE `optional_travel`
  ADD CONSTRAINT `optional_travel_ibfk_1` FOREIGN KEY (`washington_id`) REFERENCES `washington` (`id`);

--
-- Constraints for table `race_patient`
--
ALTER TABLE `race_patient`
  ADD CONSTRAINT `race_patient_ibfk_1` FOREIGN KEY (`id_patient`) REFERENCES `patients` (`id`),
  ADD CONSTRAINT `race_patient_ibfk_2` FOREIGN KEY (`id_race`) REFERENCES `race` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
