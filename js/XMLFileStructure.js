function getStructureXml(patient){

var xw = new XMLWriter('UTF-8');
xw.formatting = 'indented';//add indentation and newlines
xw.indentChar = ' ';//indent with spaces
xw.indentation = 4;//add 2 spaces per level

xw.writeStartDocument( );
//xw.writeDocType('"items.dtd"\n');
xw.writeStartElement( 'ClinicalDocument' );
xw.writeAttributeString( 'xmlns', 'urn:hl7-org:v3');
xw.writeAttributeString( 'xmlns:voc', 'urn:hl7-org:v3/voc');
xw.writeAttributeString( 'xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance');
xw.writeAttributeString( 'xsi:schemaLocation', 'urn:hl7-org:v3 CDA.xsd');

  xw.writeComment('\n'+
  '********************************************************\n'+
  'CDA Header\n'+
  '******************************1**************************\n');
  xw.writeStartElement('typeId');
    xw.writeAttributeString( 'root', '2.16.840.1.113883.1.3');
    xw.writeAttributeString( 'extension', 'c266' );
  xw.writeEndElement();

  xw.writeComment('templateId root="2.16.840.1.113883.10.20.33.1.1"/');
  xw.writeStartElement('id');
    xw.writeAttributeString( 'extension', '999');
    xw.writeAttributeString( 'root', '2.16.840.1.113883.19');
  xw.writeEndElement();

  xw.writeStartElement('code');
    xw.writeAttributeString( 'codeSystem', '2.16.840.1.113883.6.1');
    xw.writeAttributeString( 'code', '11488-4');
    xw.writeAttributeString( 'displayName', 'Disease Report Card');
  xw.writeEndElement();

  xw.writeElementString('title', 'Minnesota Department of Health - Disease Report Card');

  xw.writeStartElement('effectiveTime');
    xw.writeAttributeString( 'value', '20171018');
  xw.writeEndElement();

  xw.writeStartElement('confidentialityCode');
    xw.writeAttributeString( 'code', 'N');
    xw.writeAttributeString( 'codeSystem', '2.16.840.1.113883.5.25');
  xw.writeEndElement();

  xw.writeStartElement('languageCode');
    xw.writeAttributeString( 'code', 'en-US');
  xw.writeEndElement();

  xw.writeStartElement('setId');
    xw.writeAttributeString( 'extension', 'BB35');
    xw.writeAttributeString( 'root', '2.16.840.1.113883.3.933');
  xw.writeEndElement();
  
  xw.writeStartElement('versionNumber');
    xw.writeAttributeString( 'value', '2');
  xw.writeEndElement();

  xw.writeStartElement('recordTarget');
    xw.writeStartElement('patientRole');
      xw.writeStartElement('id');
        xw.writeAttributeString( 'extension', '12345');
        xw.writeAttributeString( 'root', '2.16.840.1.113883.3.933');
      xw.writeEndElement();
      xw.writeStartElement('addr');
        xw.writeElementString('streetAddressLine','1438 9th Ave NE');
        xw.writeElementString('city','Minneapolis');
        xw.writeElementString('state','MN');
        xw.writeElementString('postalCode','55401');
        xw.writeElementString('county','Hennepin County');
      xw.writeEndElement();
      xw.writeStartElement('telecom');
        xw.writeAttributeString( 'value', 'tel:+1555-123-4567');
        xw.writeAttributeString( 'use', 'HP');
      xw.writeEndElement();
      xw.writeStartElement('telecom');
        xw.writeAttributeString( 'value', 'tel:- - ');
        xw.writeAttributeString( 'use', 'WP');
      xw.writeEndElement();
      xw.writeStartElement('patient');
        xw.writeStartElement('name');
          xw.writeAttributeString( 'use', 'L');
          xw.writeElementString('given',patient.first_name);
          xw.writeElementString('family',patient.last_name);
          xw.writeComment('suffix></suffix');
        xw.writeEndElement();
        xw.writeStartElement('administrativeGenderCode');
          xw.writeAttributeString( 'code', 'M');
          xw.writeAttributeString( 'codeSystem', '2.16.840.1.113883.5.1');
        xw.writeEndElement();
        xw.writeStartElement('birthTime');
          xw.writeAttributeString( 'value', '20001209');
        xw.writeEndElement();
        xw.writeStartElement('maritalStatusCode');
          xw.writeAttributeString( 'codeSystemName', 'MaritalStatusCode');
        xw.writeEndElement();
        xw.writeStartElement('religiousAffiliationCode');
          xw.writeAttributeString( 'codeSystemName', 'HL7 Religious Affiliation');
        xw.writeEndElement();
        xw.writeStartElement('raceCode');
          xw.writeAttributeString( 'code', '2106-3');
          xw.writeAttributeString( 'displayName', 'White');
          xw.writeAttributeString( 'codeSystem', '2.16.840.1.113883.6.238');
          xw.writeAttributeString( 'codeSystemName', 'Race &amp; Ethnicity - CDC');
        xw.writeEndElement();
        xw.writeStartElement('ethnicGroupCode');
          xw.writeAttributeString( 'code', '2186-5');
          xw.writeAttributeString( 'displayName', 'Not Hispanic or Latino');
          xw.writeAttributeString( 'codeSystem', '2.16.840.1.113883.6.238');
          xw.writeAttributeString( 'codeSystemName', 'Race &amp; Ethnicity - CDC');
        xw.writeEndElement();
        xw.writeStartElement('guardian');
          xw.writeStartElement('code');
            xw.writeAttributeString( 'codeSystemName', 'HL7 Role code');
          xw.writeEndElement();
          xw.writeElementString('addr',' ');
          xw.writeStartElement('guardianPerson');
            xw.writeElementString('name',' ');
          xw.writeEndElement();
        xw.writeEndElement();
        xw.writeStartElement('birthplace');
          xw.writeElementString('place',' ');
        xw.writeEndElement();
        xw.writeComment('nehta:jobCode code="253314" codeSystem="2.16.840.1.113883.6.1" codeSystemName="CodeSystem: 2.16.840.1.113883.6.1 LOINC" displayName="Sales Person" place="IMAD"/')
        xw.writeStartElement('languageCommunication');
          xw.writeStartElement('languageCode');
            xw.writeAttributeString( 'code', 'en-US');
          xw.writeEndElement();
          xw.writeStartElement('modeCode');
            xw.writeAttributeString( 'code', 'RWR');
            xw.writeAttributeString( 'displayName', 'Recieve Writte');
            xw.writeAttributeString( 'codeSystem', '2.16.840.1.113883.5.60');
            xw.writeAttributeString( 'codeSystemName', 'LanguageAbilityMode');
          xw.writeEndElement();  
          xw.writeStartElement('preferenceInd');
            xw.writeAttributeString( 'value', 'true');
          xw.writeEndElement();
        xw.writeEndElement();
      xw.writeEndElement();
      xw.writeStartElement('providerOrganization');
        xw.writeStartElement('id');
          xw.writeAttributeString( 'extension', 'M345');
          xw.writeAttributeString( 'root', '2.16.840.1.113883.3.933');
        xw.writeEndElement();
      xw.writeEndElement();
    xw.writeEndElement();
  xw.writeEndElement();

  xw.writeStartElement('author');
    xw.writeStartElement('time');
      xw.writeAttributeString( 'value', '20171001');
    xw.writeEndElement();
    xw.writeStartElement('assignedAuthor');
      xw.writeComment('Internal id using HL7 example OID.');
      xw.writeStartElement('id');
        xw.writeAttributeString( 'extension', '999.1');
        xw.writeAttributeString( 'root', '2.16.840.1.113883.19');
      xw.writeEndElement();
      xw.writeStartElement('code');
        xw.writeAttributeString( 'code', 'SELF');
        xw.writeAttributeString( 'displayName', 'Self');
        xw.writeAttributeString( 'codeSystem', '2.16.840.1.113883.5.111');
        xw.writeAttributeString( 'codeSystemName', 'HL7 Role code');
      xw.writeEndElement();
      xw.writeStartElement('assignedPerson');
        xw.writeStartElement('name');
          xw.writeElementString('given','Smith');
          xw.writeElementString('family','John');
        xw.writeEndElement();  
      xw.writeEndElement();
    xw.writeEndElement();
  xw.writeEndElement();

  xw.writeStartElement('dataEnterer');
    xw.writeStartElement('time');
      xw.writeAttributeString( 'value', '20000407');
    xw.writeEndElement();
    xw.writeStartElement('assignedEntity');
      xw.writeComment('Internal id using HL7 example OID.');
      xw.writeStartElement('id');
        xw.writeAttributeString( 'extension', '999.1');
        xw.writeAttributeString( 'root', '2.16.840.1.113883.19');
      xw.writeEndElement();
      xw.writeElementString('addr',' ');
      xw.writeStartElement('telecom');
        xw.writeAttributeString( 'use', 'WP');
        xw.writeAttributeString( 'value', 'tel:+1-555-222-1122');
      xw.writeEndElement();      
      xw.writeStartElement('assignedPerson');
        xw.writeStartElement('name');
          xw.writeElementString('given','Smith');
          xw.writeElementString('family','John');
          xw.writeComment('suffix></suffix')
        xw.writeEndElement();  
      xw.writeEndElement();
    xw.writeEndElement();
  xw.writeEndElement();

  xw.writeStartElement('informant');
    xw.writeStartElement('assignedEntity');
      xw.writeComment('Internal id using HL7 example OID.');
      xw.writeStartElement('id');
        xw.writeAttributeString( 'extension', '999.1');
        xw.writeAttributeString( 'root', '2.16.840.1.113883.19');
      xw.writeEndElement();
      xw.writeStartElement('addr');
        xw.writeAttributeString( 'use', 'HP');
      xw.writeEndElement();
      xw.writeComment('HP is "primary home" from HL7 AddressUse 2.16.840.1.113883.5.1119');
      xw.writeStartElement('telecom');
        xw.writeAttributeString( 'use', 'WP');
        xw.writeAttributeString( 'value', 'tel:+1(555)555-1050');
      xw.writeEndElement();      
      xw.writeStartElement('assignedPerson');
        xw.writeStartElement('name');
          xw.writeElementString('given','Frank');
          xw.writeElementString('family','Anderson');
          xw.writeComment('suffix>MD</suffix')
        xw.writeEndElement();  
      xw.writeEndElement();
    xw.writeEndElement();
  xw.writeEndElement();

  xw.writeStartElement('custodian');
    xw.writeStartElement('assignedCustodian');
      xw.writeStartElement('representedCustodianOrganization');
        xw.writeStartElement('id');
          xw.writeAttributeString( 'extension', 'M345');
          xw.writeAttributeString( 'root', '2.16.840.1.113883.3.933');
        xw.writeEndElement();
        xw.writeElementString('name','Childrens Hospital');
      xw.writeEndElement();
    xw.writeEndElement();
  xw.writeEndElement();

  xw.writeStartElement('legalAuthenticator');
    xw.writeStartElement('time');
      xw.writeAttributeString( 'value', '20121126145000-0500');
    xw.writeEndElement();
    xw.writeStartElement('signatureCode');
      xw.writeAttributeString( 'code', 'S');
    xw.writeEndElement();
    xw.writeStartElement('assignedEntity');
      xw.writeComment('Internal id using HL7 example OID.');
      xw.writeStartElement('id');
        xw.writeAttributeString( 'extension', '999.1');
        xw.writeAttributeString( 'root', '2.16.840.1.113883.19');
      xw.writeEndElement();
      xw.writeStartElement('addr');
        xw.writeAttributeString( 'use', 'HP');
        xw.writeElementString('streetAddressLine','625 Robert St. N.');
        xw.writeElementString('city','St. Paul');
        xw.writeElementString('state','MN');
        xw.writeElementString('postalCode','64975');
        xw.writeElementString('country','US');
      xw.writeEndElement();
      xw.writeStartElement('telecom');
        xw.writeAttributeString( 'value', 'tel:+1-651-201-5414');
        xw.writeAttributeString( 'use', 'WP');
      xw.writeEndElement(); 
      xw.writeStartElement('telecom');
        xw.writeAttributeString( 'value', 'tel:+1-651-201-5414');
        xw.writeAttributeString( 'use', 'WP');
      xw.writeEndElement();
      xw.writeStartElement('telecom');
        xw.writeAttributeString( 'value', 'tel:+1-651-201-5414');
        xw.writeAttributeString( 'use', 'WP');
      xw.writeEndElement();
      xw.writeStartElement('assignedPerson');
        xw.writeElementString('name',' Minnesota Department of Health ');
      xw.writeEndElement();
    xw.writeEndElement();
  xw.writeEndElement();

  xw.writeStartElement('inFulfillmentOf');
    xw.writeStartElement('order');
      xw.writeStartElement('id');
        xw.writeAttributeString( 'extension', '123451');
        xw.writeAttributeString( 'root', '1.2.840.113619.2.62.994044785528.29');
      xw.writeEndElement();
    xw.writeEndElement();
  xw.writeEndElement();

  xw.writeStartElement('documentationOf');
    xw.writeStartElement('serviceEvent');
      xw.writeAttributeString( 'classCode', 'PCPR');
        xw.writeStartElement('effectiveTime');
          xw.writeAttributeString( 'value', '20171010');
        xw.writeEndElement();
      xw.writeEndElement();
    xw.writeEndElement();
  xw.writeEndElement();

  xw.writeStartElement('relatedDocument');
    xw.writeAttributeString( 'typeCode', 'RPLC');
    xw.writeStartElement('parentDocument');
      xw.writeStartElement('id');
        xw.writeAttributeString( 'extension', 'a123');
        xw.writeAttributeString( 'root', '2.16.840.1.113883.3.933');
      xw.writeEndElement();
      xw.writeStartElement('setId');
        xw.writeAttributeString( 'extension', 'BB35');
        xw.writeAttributeString( 'root', '2.16.840.1.113883.3.933');
      xw.writeEndElement();
      xw.writeStartElement('versionNumber');
        xw.writeAttributeString( 'value', '1');
      xw.writeEndElement();
    xw.writeEndElement();
  xw.writeEndElement();

  xw.writeStartElement('componentOf');
    xw.writeStartElement('encompassingEncounter');
      xw.writeStartElement('id');
        xw.writeAttributeString( 'extension', '9937012');
        xw.writeAttributeString( 'root', '1.3.6.4.1.4.1.2835.12');
      xw.writeEndElement();
      xw.writeStartElement('code');
        xw.writeAttributeString( 'code', '11502-2');
        xw.writeAttributeString( 'codeSystem', '2.16.840.1.113883.6.1');
        xw.writeAttributeString( 'codeSystemName', 'LOINC');
      xw.writeEndElement();
      xw.writeStartElement('effectiveTime');
        xw.writeAttributeString( 'value', '20171001');
      xw.writeEndElement();
    xw.writeEndElement();
  xw.writeEndElement();

  xw.writeComment('\n'+
  '********************************************************\n'+
  'CDA Body\n'+
  '******************************1**************************\n');

  xw.writeStartElement('component');
    xw.writeStartElement('structuredBody');
      xw.writeStartElement('component');
        xw.writeStartElement('section');

          xw.writeStartElement('entry');
            xw.writeStartElement('act');
              xw.writeAttributeString( 'classCode', 'ACT');
              xw.writeAttributeString( 'moodCode', 'EVN');
              xw.writeStartElement('templateId');
                xw.writeAttributeString( 'root', '2.16.840.1.113883.10.20.22.4.3');
                xw.writeAttributeString( 'extension', '2015-08-01');
              xw.writeEndElement();
              xw.writeStartElement('templateId');
                xw.writeAttributeString( 'root', '2.16.840.1.113883.10.20.22.4.3');
              xw.writeEndElement();
              xw.writeStartElement('id');
                xw.writeAttributeString( 'root', '102ca2e9-884c-4523-a2b4-1b6c3469c397');
              xw.writeEndElement();
              xw.writeStartElement('code');
                xw.writeAttributeString( 'code', 'CONC');
                xw.writeAttributeString( 'codeSystem', '2.16.840.1.113883.5.6');
              xw.writeEndElement();
              xw.writeStartElement('entryRelationship');
                xw.writeAttributeString( 'typeCode', 'SUBJ');
                xw.writeStartElement('observation');
                  xw.writeAttributeString( 'classCode', 'OBS');
                  xw.writeAttributeString( 'moodCode', 'EVN');
                  xw.writeStartElement('templateId');
                    xw.writeAttributeString( 'root', '2.16.840.1.113883.10.20.22.2.7.1');
                  xw.writeEndElement();
                  xw.writeStartElement('templateId');
                    xw.writeAttributeString( 'root', '2.16.840.1.113883.10.20.22.2.7.1');
                    xw.writeAttributeString( 'extension', '2014-06-09');
                  xw.writeEndElement();
                  xw.writeStartElement('code');
                    xw.writeAttributeString( 'code', '47519-4');
                    xw.writeAttributeString( 'codeSystem', '2.16.840.1.113883.6.1');
                    xw.writeAttributeString( 'codeSystemName', 'LOINC');
                    xw.writeAttributeString( 'displayName', 'Disease');
                  xw.writeEndElement();
                  xw.writeElementString('text','Novel Influenza, Type A ');
                xw.writeEndElement();
              xw.writeEndElement();
            xw.writeEndElement();
          xw.writeEndElement();

        xw.writeStartElement('entry');
          xw.writeStartElement('act');
            xw.writeAttributeString( 'classCode', 'ACT');
            xw.writeAttributeString( 'moodCode', 'EVN');
            xw.writeStartElement('templateId');
              xw.writeAttributeString( 'root', '2.16.840.1.113883.10.20.22.4.3');
              xw.writeAttributeString( 'extension', '2015-08-01');
            xw.writeEndElement();
            xw.writeStartElement('templateId');
              xw.writeAttributeString( 'root', '2.16.840.1.113883.10.20.22.4.3');
            xw.writeEndElement();
            xw.writeStartElement('id');
              xw.writeAttributeString( 'root', '102ca2e9-884c-4523-a2b4-1b6c3469c397');
            xw.writeEndElement();
            xw.writeStartElement('code');
              xw.writeAttributeString( 'code', 'CONC');
              xw.writeAttributeString( 'codeSystem', '2.16.840.1.113883.5.6');
            xw.writeEndElement();
            xw.writeStartElement('entryRelationship');
              xw.writeAttributeString( 'typeCode', 'SUBJ');
              xw.writeStartElement('observation');
                xw.writeAttributeString( 'classCode', 'OBS');
                xw.writeAttributeString( 'moodCode', 'EVN');
                xw.writeStartElement('templateId');
                  xw.writeAttributeString( 'root', '2.16.840.1.113883.10.20.22.4.4');
                  xw.writeAttributeString( 'extension', '2015-08-01');
                xw.writeEndElement();
                xw.writeStartElement('templateId');
                  xw.writeAttributeString( 'root', '2.16.840.1.113883.10.20.22.4.4');
                xw.writeEndElement();
               xw.writeStartElement('id');
                  xw.writeAttributeString( 'root', '49c5ca3e-662f-4e33-948f-2777ebc6727e');
                xw.writeEndElement();
                xw.writeStartElement('code');
                  xw.writeAttributeString( 'codeSystem', '2.16.840.1.113883.6.96');
                  xw.writeAttributeString( 'codeSystemName', 'SNOMED CT');
                  xw.writeAttributeString( 'code', '55607006');
                  xw.writeAttributeString( 'displayName', 'Problem');
                  xw.writeStartElement('translation');
                    xw.writeAttributeString( 'codeSystem', '2.16.840.1.113883.6.1');
                    xw.writeAttributeString( 'codeSystemName', 'LOINC');
                    xw.writeAttributeString( 'code', '75326-9');
                    xw.writeAttributeString( 'displayName', 'Problem');
                  xw.writeEndElement();                 
                xw.writeEndElement();
                xw.writeElementString('text',' Patient was hospitalized ')
                xw.writeStartElement('statusCode');
                  xw.writeAttributeString( 'code', 'No');
                xw.writeEndElement();                                
                xw.writeElementString('effectiveTime',' ')
              xw.writeEndElement();
            xw.writeEndElement();
          xw.writeEndElement();
        xw.writeEndElement();

        xw.writeStartElement('entry');
          xw.writeStartElement('act');
            xw.writeAttributeString( 'classCode', 'ACT');
            xw.writeAttributeString( 'moodCode', 'EVN');
            xw.writeStartElement('templateId');
              xw.writeAttributeString( 'root', '2.16.840.1.113883.10.20.22.4.3');
              xw.writeAttributeString( 'extension', '2015-08-01');
            xw.writeEndElement();
            xw.writeStartElement('templateId');
              xw.writeAttributeString( 'root', '2.16.840.1.113883.10.20.22.4.3');
            xw.writeEndElement();
            xw.writeStartElement('id');
              xw.writeAttributeString( 'root', '102ca2e9-884c-4523-a2b4-1b6c3469c397');
            xw.writeEndElement();
            xw.writeStartElement('code');
              xw.writeAttributeString( 'code', 'CONC');
              xw.writeAttributeString( 'codeSystem', '2.16.840.1.113883.5.6');
            xw.writeEndElement();
            xw.writeStartElement('entryRelationship');
              xw.writeAttributeString( 'typeCode', 'SUBJ');
              xw.writeStartElement('observation');
                xw.writeAttributeString( 'classCode', 'OBS');
                xw.writeAttributeString( 'moodCode', 'EVN');
                xw.writeStartElement('templateId');
                  xw.writeAttributeString( 'root', '2.16.840.1.113883.10.20.22.4.4');
                  xw.writeAttributeString( 'extension', '2015-08-01');
                xw.writeEndElement();
                xw.writeStartElement('templateId');
                  xw.writeAttributeString( 'root', '2.16.840.1.113883.10.20.22.4.4');
                xw.writeEndElement();
               xw.writeStartElement('id');
                  xw.writeAttributeString( 'root', '49c5ca3e-662f-4e33-948f-2777ebc6727e');
                xw.writeEndElement();
                xw.writeStartElement('code');
                  xw.writeAttributeString( 'codeSystem', '2.16.840.1.113883.6.96');
                  xw.writeAttributeString( 'codeSystemName', 'SNOMED CT');
                  xw.writeAttributeString( 'code', '55607006');
                  xw.writeAttributeString( 'displayName', 'Problem');
                  xw.writeStartElement('translation');
                    xw.writeAttributeString( 'codeSystem', '2.16.840.1.113883.6.1');
                    xw.writeAttributeString( 'codeSystemName', 'LOINC');
                    xw.writeAttributeString( 'code', '75326-9');
                    xw.writeAttributeString( 'displayName', 'Problem');
                  xw.writeEndElement();                 
                xw.writeEndElement();
                xw.writeElementString('text',' Patient died as a result of this illness ')
                xw.writeStartElement('statusCode');
                  xw.writeAttributeString( 'code', 'No');
                xw.writeEndElement();                                
                xw.writeElementString('effectiveTime',' ')
              xw.writeEndElement();
            xw.writeEndElement();
          xw.writeEndElement();
        xw.writeEndElement();

        xw.writeStartElement('entry');
          xw.writeStartElement('act');
            xw.writeAttributeString( 'classCode', 'ACT');
            xw.writeAttributeString( 'moodCode', 'EVN');
            xw.writeStartElement('templateId');
              xw.writeAttributeString( 'root', '2.16.840.1.113883.10.20.22.4.3');
              xw.writeAttributeString( 'extension', '2015-08-01');
            xw.writeEndElement();
            xw.writeStartElement('templateId');
              xw.writeAttributeString( 'root', '2.16.840.1.113883.10.20.22.4.3');
            xw.writeEndElement();
            xw.writeStartElement('id');
              xw.writeAttributeString( 'root', '102ca2e9-884c-4523-a2b4-1b6c3469c397');
            xw.writeEndElement();
            xw.writeStartElement('code');
              xw.writeAttributeString( 'code', 'CONC');
              xw.writeAttributeString( 'codeSystem', '2.16.840.1.113883.5.6');
            xw.writeEndElement();
            xw.writeStartElement('entryRelationship');
              xw.writeAttributeString( 'typeCode', 'SUBJ');
              xw.writeStartElement('observation');
                xw.writeAttributeString( 'classCode', 'OBS');
                xw.writeAttributeString( 'moodCode', 'EVN');
                xw.writeStartElement('templateId');
                  xw.writeAttributeString( 'root', '2.16.840.1.113883.10.20.22.4.4');
                  xw.writeAttributeString( 'extension', '2015-08-01');
                xw.writeEndElement();
                xw.writeStartElement('templateId');
                  xw.writeAttributeString( 'root', '2.16.840.1.113883.10.20.22.4.4');
                xw.writeEndElement();
               xw.writeStartElement('id');
                  xw.writeAttributeString( 'root', '49c5ca3e-662f-4e33-948f-2777ebc6727e');
                xw.writeEndElement();
                xw.writeStartElement('code');
                  xw.writeAttributeString( 'codeSystem', '2.16.840.1.113883.6.96');
                  xw.writeAttributeString( 'codeSystemName', 'SNOMED CT');
                  xw.writeAttributeString( 'code', '55607006');
                  xw.writeAttributeString( 'displayName', 'Problem');
                  xw.writeStartElement('translation');
                    xw.writeAttributeString( 'codeSystem', '2.16.840.1.113883.6.1');
                    xw.writeAttributeString( 'codeSystemName', 'LOINC');
                    xw.writeAttributeString( 'code', '75326-9');
                    xw.writeAttributeString( 'displayName', 'Problem');
                  xw.writeEndElement();                 
                xw.writeEndElement();
                xw.writeElementString('text',' Patient is a foodhandler ')
                xw.writeStartElement('statusCode');
                  xw.writeAttributeString( 'code', 'No');
                xw.writeEndElement();                                
                xw.writeElementString('effectiveTime',' ')
              xw.writeEndElement();
            xw.writeEndElement();
          xw.writeEndElement();
        xw.writeEndElement();


        xw.writeStartElement('entry');
          xw.writeStartElement('act');
            xw.writeAttributeString( 'classCode', 'ACT');
            xw.writeAttributeString( 'moodCode', 'EVN');
            xw.writeStartElement('templateId');
              xw.writeAttributeString( 'root', '2.16.840.1.113883.10.20.22.4.3');
              xw.writeAttributeString( 'extension', '2015-08-01');
            xw.writeEndElement();
            xw.writeStartElement('templateId');
              xw.writeAttributeString( 'root', '2.16.840.1.113883.10.20.22.4.3');
            xw.writeEndElement();
            xw.writeStartElement('id');
              xw.writeAttributeString( 'root', '102ca2e9-884c-4523-a2b4-1b6c3469c397');
            xw.writeEndElement();
            xw.writeStartElement('code');
              xw.writeAttributeString( 'code', 'CONC');
              xw.writeAttributeString( 'codeSystem', '2.16.840.1.113883.5.6');
            xw.writeEndElement();
            xw.writeStartElement('entryRelationship');
              xw.writeAttributeString( 'typeCode', 'SUBJ');
              xw.writeStartElement('observation');
                xw.writeAttributeString( 'classCode', 'OBS');
                xw.writeAttributeString( 'moodCode', 'EVN');
                xw.writeStartElement('templateId');
                  xw.writeAttributeString( 'root', '2.16.840.1.113883.10.20.22.4.4');
                  xw.writeAttributeString( 'extension', '2015-08-01');
                xw.writeEndElement();
                xw.writeStartElement('templateId');
                  xw.writeAttributeString( 'root', '2.16.840.1.113883.10.20.22.4.4');
                xw.writeEndElement();
               xw.writeStartElement('id');
                  xw.writeAttributeString( 'root', '49c5ca3e-662f-4e33-948f-2777ebc6727e');
                xw.writeEndElement();
                xw.writeStartElement('code');
                  xw.writeAttributeString( 'codeSystem', '2.16.840.1.113883.6.96');
                  xw.writeAttributeString( 'codeSystemName', 'SNOMED CT');
                  xw.writeAttributeString( 'code', '55607006');
                  xw.writeAttributeString( 'displayName', 'Problem');
                  xw.writeStartElement('translation');
                    xw.writeAttributeString( 'codeSystem', '2.16.840.1.113883.6.1');
                    xw.writeAttributeString( 'codeSystemName', 'LOINC');
                    xw.writeAttributeString( 'code', '75326-9');
                    xw.writeAttributeString( 'displayName', 'Problem');
                  xw.writeEndElement();                 
                xw.writeEndElement();
                xw.writeElementString('text',' Patient has contact with children in daycare ')
                xw.writeStartElement('statusCode');
                  xw.writeAttributeString( 'code', 'No');
                xw.writeEndElement();                                
                xw.writeElementString('effectiveTime',' ')
              xw.writeEndElement();
            xw.writeEndElement();
          xw.writeEndElement();
        xw.writeEndElement();

        xw.writeStartElement('entry');
          xw.writeStartElement('act');
            xw.writeAttributeString( 'classCode', 'ACT');
            xw.writeAttributeString( 'moodCode', 'EVN');
            xw.writeStartElement('templateId');
              xw.writeAttributeString( 'root', '2.16.840.1.113883.10.20.22.4.3');
              xw.writeAttributeString( 'extension', '2015-08-01');
            xw.writeEndElement();
            xw.writeStartElement('templateId');
              xw.writeAttributeString( 'root', '2.16.840.1.113883.10.20.22.4.3');
            xw.writeEndElement();
            xw.writeStartElement('id');
              xw.writeAttributeString( 'root', '102ca2e9-884c-4523-a2b4-1b6c3469c397');
            xw.writeEndElement();
            xw.writeStartElement('code');
              xw.writeAttributeString( 'code', 'CONC');
              xw.writeAttributeString( 'codeSystem', '2.16.840.1.113883.5.6');
            xw.writeEndElement();
            xw.writeStartElement('entryRelationship');
              xw.writeAttributeString( 'typeCode', 'SUBJ');
              xw.writeStartElement('observation');
                xw.writeAttributeString( 'classCode', 'OBS');
                xw.writeAttributeString( 'moodCode', 'EVN');
                xw.writeStartElement('templateId');
                  xw.writeAttributeString( 'root', '2.16.840.1.113883.10.20.22.4.4');
                  xw.writeAttributeString( 'extension', '2015-08-01');
                xw.writeEndElement();
                xw.writeStartElement('templateId');
                  xw.writeAttributeString( 'root', '2.16.840.1.113883.10.20.22.4.4');
                xw.writeEndElement();
               xw.writeStartElement('id');
                  xw.writeAttributeString( 'root', '49c5ca3e-662f-4e33-948f-2777ebc6727e');
                xw.writeEndElement();
                xw.writeStartElement('code');
                  xw.writeAttributeString( 'codeSystem', '2.16.840.1.113883.6.96');
                  xw.writeAttributeString( 'codeSystemName', 'SNOMED CT');
                  xw.writeAttributeString( 'code', '55607006');
                  xw.writeAttributeString( 'displayName', 'Problem');
                  xw.writeStartElement('translation');
                    xw.writeAttributeString( 'codeSystem', '2.16.840.1.113883.6.1');
                    xw.writeAttributeString( 'codeSystemName', 'LOINC');
                    xw.writeAttributeString( 'code', '75326-9');
                    xw.writeAttributeString( 'displayName', 'Problem');
                  xw.writeEndElement();
                  xw.writeComment('value xsi:type="CD" code="77386006" displayName="pregnant" codeSystem="2.16.840.1.113883.6.96"/');                 
                xw.writeEndElement();
                xw.writeElementString('text',' Pregnant? (esp. for Hep B, HIV) ')
                xw.writeStartElement('statusCode');
                  xw.writeAttributeString( 'code', 'No');
                xw.writeEndElement();                                
                xw.writeElementString('effectiveTime',' ')
              xw.writeEndElement();
            xw.writeEndElement();
          xw.writeEndElement();
        xw.writeEndElement();

        xw.writeStartElement('entry');
          xw.writeStartElement('act');
            xw.writeAttributeString( 'classCode', 'ACT');
            xw.writeAttributeString( 'moodCode', 'EVN');
            xw.writeStartElement('templateId');
              xw.writeAttributeString( 'root', '2.16.840.1.113883.10.20.22.4.3');
              xw.writeAttributeString( 'extension', '2015-08-01');
            xw.writeEndElement();
            xw.writeStartElement('templateId');
              xw.writeAttributeString( 'root', '2.16.840.1.113883.10.20.22.4.3');
            xw.writeEndElement();
            xw.writeStartElement('id');
              xw.writeAttributeString( 'root', '102ca2e9-884c-4523-a2b4-1b6c3469c397');
            xw.writeEndElement();
            xw.writeStartElement('code');
              xw.writeAttributeString( 'code', 'CONC');
              xw.writeAttributeString( 'codeSystem', '2.16.840.1.113883.5.6');
            xw.writeEndElement();
            xw.writeStartElement('entryRelationship');
              xw.writeAttributeString( 'typeCode', 'SUBJ');
              xw.writeStartElement('observation');
                xw.writeAttributeString( 'classCode', 'OBS');
                xw.writeAttributeString( 'moodCode', 'EVN');
                xw.writeStartElement('templateId');
                  xw.writeAttributeString( 'root', '2.16.840.1.113883.10.20.22.4.4');
                  xw.writeAttributeString( 'extension', '2015-08-01');
                xw.writeEndElement();
                xw.writeStartElement('templateId');
                  xw.writeAttributeString( 'root', '2.16.840.1.113883.10.20.22.4.4');
                xw.writeEndElement();
               xw.writeStartElement('id');
                  xw.writeAttributeString( 'root', '49c5ca3e-662f-4e33-948f-2777ebc6727e');
                xw.writeEndElement();
                xw.writeStartElement('code');
                  xw.writeAttributeString( 'codeSystem', '2.16.840.1.113883.6.96');
                  xw.writeAttributeString( 'codeSystemName', 'SNOMED CT');
                  xw.writeAttributeString( 'code', '55607006');
                  xw.writeAttributeString( 'displayName', 'Problem');
                  xw.writeStartElement('translation');
                    xw.writeAttributeString( 'codeSystem', '2.16.840.1.113883.6.1');
                    xw.writeAttributeString( 'codeSystemName', 'LOINC');
                    xw.writeAttributeString( 'code', '75326-9');
                    xw.writeAttributeString( 'displayName', 'Problem');
                  xw.writeEndElement();
                xw.writeEndElement();
                xw.writeElementString('text',' Avian Influenza ')
                xw.writeStartElement('statusCode');
                  xw.writeAttributeString( 'code', 'No');
                xw.writeEndElement();                                
                xw.writeElementString('effectiveTime',' ')
              xw.writeEndElement();
            xw.writeEndElement();
          xw.writeEndElement();
        xw.writeEndElement();

      xw.writeEndElement();
    xw.writeEndElement();
  xw.writeEndElement();
xw.writeEndDocument();
return xw.flush();
}