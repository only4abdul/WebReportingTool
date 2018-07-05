-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 26, 2018 at 09:09 AM
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
-- Table structure for table `cdc`
--

CREATE TABLE `cdc` (
  `id` int(11) NOT NULL,
  `state` varchar(100) DEFAULT NULL,
  `date_reported` varchar(100) DEFAULT NULL,
  `date_interview` varchar(100) DEFAULT NULL,
  `state_epi` varchar(100) DEFAULT NULL,
  `state_lab` varchar(100) DEFAULT NULL,
  `household_id` varchar(100) DEFAULT NULL,
  `cdc_id` varchar(100) DEFAULT NULL,
  `cluster_id` varchar(100) DEFAULT NULL,
  `time_report` varchar(100) DEFAULT NULL,
  `subtype` varchar(100) DEFAULT NULL,
  `subtype_other` varchar(100) DEFAULT NULL,
  `date_symptoms` varchar(100) DEFAULT NULL,
  `fever` varchar(100) DEFAULT NULL,
  `fever_date` varchar(100) DEFAULT NULL,
  `felt_feverish` varchar(100) DEFAULT NULL,
  `felt_feverish_date` varchar(100) DEFAULT NULL,
  `cough` varchar(100) DEFAULT NULL,
  `sore_throat` varchar(100) DEFAULT NULL,
  `muscle_aches` varchar(100) DEFAULT NULL,
  `headache` varchar(100) DEFAULT NULL,
  `shortness_breath` varchar(100) DEFAULT NULL,
  `vomiting` varchar(100) DEFAULT NULL,
  `diarrhea` varchar(100) DEFAULT NULL,
  `eye_infection` varchar(100) DEFAULT NULL,
  `rash` varchar(100) DEFAULT NULL,
  `fatigue` varchar(100) DEFAULT NULL,
  `seizures` varchar(100) DEFAULT NULL,
  `other` varchar(100) DEFAULT NULL,
  `have_symptoms` varchar(100) DEFAULT NULL,
  `back_normal_date` varchar(100) DEFAULT NULL,
  `any_medical` varchar(100) DEFAULT NULL,
  `seek_office` tinyint(1) DEFAULT NULL,
  `seek_office_date` varchar(100) DEFAULT NULL,
  `seek_clinic` tinyint(1) DEFAULT NULL,
  `seek_clinic_date` varchar(100) DEFAULT NULL,
  `seek_room` tinyint(1) DEFAULT NULL,
  `seek_room_date` varchar(100) DEFAULT NULL,
  `seek_department` tinyint(1) DEFAULT NULL,
  `seek_department_date` varchar(100) DEFAULT NULL,
  `seek_other` tinyint(1) DEFAULT NULL,
  `seek_other_text` varchar(100) DEFAULT NULL,
  `seek_other_date` varchar(100) DEFAULT NULL,
  `seek_unknown` tinyint(1) DEFAULT NULL,
  `patient_hospitalized` varchar(100) DEFAULT NULL,
  `first_admission` varchar(100) DEFAULT NULL,
  `second_admission` varchar(100) DEFAULT NULL,
  `patient_admitted` varchar(100) DEFAULT NULL,
  `ic_admission` varchar(100) DEFAULT NULL,
  `icu_discharge` varchar(100) DEFAULT NULL,
  `ventilation` varchar(100) DEFAULT NULL,
  `ventilation_days` varchar(100) DEFAULT NULL,
  `discharged` varchar(100) DEFAULT NULL,
  `first_discharge` varchar(100) DEFAULT NULL,
  `second_discharge` varchar(100) DEFAULT NULL,
  `discharged_place` varchar(100) DEFAULT NULL,
  `discharged_place_other` varchar(100) DEFAULT NULL,
  `x_ray` varchar(100) DEFAULT NULL,
  `pneumonia` varchar(100) DEFAULT NULL,
  `ards` varchar(100) DEFAULT NULL,
  `leukopenia` varchar(100) DEFAULT NULL,
  `lymphopenia` varchar(100) DEFAULT NULL,
  `thrombocytopenia` varchar(100) DEFAULT NULL,
  `other_complications` varchar(100) DEFAULT NULL,
  `other_complications_text` varchar(100) DEFAULT NULL,
  `antiviral_medications` varchar(100) DEFAULT NULL,
  `id_patient` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cdc`
--

INSERT INTO `cdc` (`id`, `state`, `date_reported`, `date_interview`, `state_epi`, `state_lab`, `household_id`, `cdc_id`, `cluster_id`, `time_report`, `subtype`, `subtype_other`, `date_symptoms`, `fever`, `fever_date`, `felt_feverish`, `felt_feverish_date`, `cough`, `sore_throat`, `muscle_aches`, `headache`, `shortness_breath`, `vomiting`, `diarrhea`, `eye_infection`, `rash`, `fatigue`, `seizures`, `other`, `have_symptoms`, `back_normal_date`, `any_medical`, `seek_office`, `seek_office_date`, `seek_clinic`, `seek_clinic_date`, `seek_room`, `seek_room_date`, `seek_department`, `seek_department_date`, `seek_other`, `seek_other_text`, `seek_other_date`, `seek_unknown`, `patient_hospitalized`, `first_admission`, `second_admission`, `patient_admitted`, `ic_admission`, `icu_discharge`, `ventilation`, `ventilation_days`, `discharged`, `first_discharge`, `second_discharge`, `discharged_place`, `discharged_place_other`, `x_ray`, `pneumonia`, `ards`, `leukopenia`, `lymphopenia`, `thrombocytopenia`, `other_complications`, `other_complications_text`, `antiviral_medications`, `id_patient`) VALUES
(1, '1aa2', '2018-03-22', '2018-04-21', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'No', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cdc`
--
ALTER TABLE `cdc`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_patient` (`id_patient`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cdc`
--
ALTER TABLE `cdc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `cdc`
--
ALTER TABLE `cdc`
  ADD CONSTRAINT `cdc_ibfk_1` FOREIGN KEY (`id_patient`) REFERENCES `patients` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
