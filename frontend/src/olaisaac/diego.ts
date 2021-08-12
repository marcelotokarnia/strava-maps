import { ParsedStravaProfile } from '@tokks/strava'

const athleteId = '80690783'

const diego: ParsedStravaProfile = {
  createdAt: '2015-11-21T00:38:38Z',
  id: athleteId,
  name: 'Diego Zancaneli',
  picture:
    'https://lh6.googleusercontent.com/-dBdEU9qxwJk/AAAAAAAAAAI/AAAAAAAACOQ/AMZuuckvdmuhZtXGNE8-uvLhhWw4xnwikQ/s96-c/photo.jpg',
  username: 'mtokarnia',
}

export const diegoActivitiesV3 = [
  {
    athleteId,
    distance: 4730.0,
    elevation: {
      gain: 13.0,
    },
    id: '5611177608',
    name: 'Corrida na hora do almoço',
    pace: {
      average: 324,
    },
    polyline:
      'z}}nCrzx{GBBBBD?DCD@D?FADCDAB?BCBABCBCBABCBA@CBAHEBAD?B?D@F@D?B?D@D?D?BAD?@@B?D?B?B?B?F@B@B@D@D@D@B@BBB@F@D@LC?CBBDD@?D@BC@AFAHADCHCFAHEFCFCD?FAFCB?DADE@ADADAFCB?BEDAFADADCDADCBADC@ADE@CDEBABCDE@ABEDEDCBCBE@A@EDG@ABEBGBCBE@E@G?A@G?EBG@G@E?G@G@G@EDEBEDEBEBE?C?EBE@ABE@?DCDEDEFAFC@ADCBCFA@ADA@ADCBE@ADE@ADC@?FE@ADE@ADCDCDCBCDEBADCDEBCDEBEDCDEDCBCBEBEBGBGBCBEBC@C@E@GAAAE?GCE@EBC?GCICGAEAGCGAEAGAGCGAI?GCGAEAGCCCECGCEECAECGEACECCCCEECCCCGCA?CECAAEEEEEECEECCCECECCCECCEEAACCCAGEAACCECCCCECECECEAE?AEE?AECAACECECECCAEAECGAAEEA?EECEACCCAGACAC?A?E?I?ACEAE?GAGAE?GAEAE?GAEAE?GACCGCGAGECEEAEAGAEAEAECEAACEAAAEAACGAAEEACAECGAEAGEGAECEACEGAACCEEEECCECCECCECCCCCA?ECA?ECAAECC?CAGCEAG?GACAE?GAAAGACAEAA?AAC?G?A?GBC@E@KDIBG@E@G@G@CBG@A@G@EBE@EBE@EBCBE@EBE@EBCBGB?@EDCBCBCBABEBEDA@CBCBCBCBEDCBEFA?EDA@CBCDEDEBCDCDCBCDEBCBEBE@CDCBEBA@EDEDA@CBEDA@CBCDCBCDEBCDADCDABCDCDCDCDADCDADADABCD?@CDADCFAFCBCDCD?@CDA@?D?H?BAFA@ADADEDCDCDAFAFADAB?FADCDAH?@CDAD?FADAF?DAD?D@FAD?FADAF?DAFA@?FAFAB@DAD?F?B?H@B?FAF?B?D?FADCB?FADAFA@?FA?AD?FCF?@CDAFABEDA@ADCBADCDCBCDEDA@EDC?CBE@G@A@E@EBC@E?G?A?E@G@A?EAEAEAGAA?CAEAGCAACAEAA?ECC?ECAAEACEA?EAE?G?G?EAGAC?E?GCA?GCA?CCEEAAGAAAECAAEAA?CAAAcGxCABABABABABABA@ABABABABABABABABA@AB@L?J@B?D?D@B@D?D@B?D?D@D@B@D@F?DBH?D@D@@@B@@?B@F?D@D@D@FBBBDBF@BBD@B@DBDBBBDBD@@DD??DDD@D@@@F@BBDBD@@?DBB?B@DB@@D?D?DBD@B@FBD@@?F?@@D?@?F@B?B?D?FBHADB@?D@@?F?@?FB@?D@D@D?F@H@D@D@B@B@D?D@F@B?D@H?F?F@F@D@D@D@B@D@F?B@FAF@B?D@F?D?F@D@FAB?DBD?B?@?B?B?@@BAF@D?D@F?FBD?D?F@@?F@@@B@F?D?D?F@D?F@@?D?B?BBD@F?@?D?D?F?B?F?@?F?BADBDA@?F?F?@?DA@?FAB?D?D?D@HCDCD?FAHAF?DADADCDADADABCDCDE@?DE@ADC@ADCDCBAD?DADAF?D?D?B?D?D?FA@?D??AD?B?F?@?D@F@@?D@F?@AD?@?F@@?B?D?F?@?FBB?D@B?BBD@F?@@DAB?BAF@D?DABADCF?@?FCBABADADABADCBCFCFCDCDADC@ADE@CDE@ABABCBEDA@AHCFEDCBE@?DC@?DC@ADCBCDC@ABCBEBCBCBEBEBC@G@A@I@G@C@E@A@EDE@ADC@EBEBC@E@C@EBE@E@A@E?ABEDC@ADEDEDCBE@ABG?ABCFCBCBABCFC?ADC@ADE@A@C@CBE?ABEBCBEDC@ADE@ADEBADE?AFC@ADCFC@ABCDCDCDEDABGDEDCBEDCBE?ABEBE@EBC@E?I@C?EAE?G?E?GAG?EAEAEAGAAAE?G?CAE?E?GCE?EAECEACACEECCEEAECCECCEAAECAACEAACEAAEEAACCEECECECCCCEECCGECCEEAACCEEA?CCECAACEAAEECEEE?AEEAACEAAEEAACEACCCCEAECEEG?ACEAAAGACAECE?CAEAG?CCE?ACG?ACE?ACECG?ACE?CCE?GAA?EAEAEAGAA?ECE?EAGCKAEEGCACECECCCGAEAECG?CACAECG?ACECE?AEEAAACEECCEAEECECECCCECEAEECCEECAAEEAACCCECAAAEACCGAA?CEEAEAEAEAAACCAACAAAE?CACAA?E?EAAAE?E@E@I@G@E@GDE@E@E@E@C@I@G@GBCDGBEBEBCBGBA@EBC@G@A@CBE@CBEBCBEBA@CDC@ABEBCDEBA@CBEDA@CDCBCDA@CDCBEFA@CDADEBEDA@CBGBA@EBA@E@EDC@CBEBEBCBCBEDCBABCDCBCDCDCBEFC@CBCDADCFA@AFABCFA@ADCDABCBCDCBCDCDCDCDABCDCBAFA@AFA@ADAFADA@AFAB?DADAFAF@HADAF?D?D?DAH?@AF?@?FADAFAD@F?@CD?@?F@F?D?D@F?D?DA@AFAB?FAFAFADAF?FAB?D?DCFADAF?@?DAH?BADADAFA@ADCDADABCDAF?@CDA@CBA@CBGBA@CDEBEBEBA?E@C?E@C?G@A?G@C?E?GAE?GAA?E?E?E?GAAAEAA?EAAAEAECAAEACAEACACAGAEAE?E?EAEAA?GACAG?EAAAECAAEEA?EEAAEEEACCEEECCECCCCECCAECEAEAEAE?G?E?E?E?G?C?E?G?E@E?E@E@E?E@EBC?EBE?G@EBE@EBC@E@CBEBE@A?CBEDEDABADCFA@EDA@EBEDCD?DAF?DAFAHCHCFCFAFA@AFAHCFCDAF?@@F?B?D@F?FAD@F@F?F?F?F@F?F?D@F?F?@?F@D?D@F@DBD@B@DDF@BBD@DBD@F?@DFBBBDDDBF@H@FBD@@BDBBBBDD@@H@B@DBD@DBF@@?D@B@D@D@BBF@B@D@D@D@B@DBFBB?B@F@@?B@B?D@@?D@@@F@B@D@D?D?F?F@D@D@D@D?F?D@FB@?F@@@F?D?D@FA@?FA@?',
    startDate: '2021-07-11T14:13:15Z',
    startPosition: {
      lat: -23.587661,
      lng: -46.662977,
    },
    time: {
      elapsed: 1534,
    },
    type: 'Run',
  },
  {
    athleteId,
    distance: 6175.6,
    elevation: {
      gain: 43.3,
    },
    id: '5583663958',
    name: 'Corrida matinal',
    pace: {
      average: 334,
    },
    polyline:
      'p`}nC~dx{GpAu@JGDFFD@FDD@A@F@DBB?B?FCB?D@B@FBBBB@B@@BBBB@BBD@B@DDBBBBDBDBB@BBHDF@BFDBD@B?BA@A?C?C?C?C?EAA@E?C?C?C@C??BC@C?C?C@ADE@EBEBEDCDCDADCBCBADCDCDCDAFCDAFCDADCDAFAF?D?DADADAFADADADAD@D?D?F?F@F?D@F?D@F?FAZCB@?@D@FBD@F@F@D@DBF@F@F@D@DBH@BBDBD@DBFBBDBBDBDBD@DBD@@BDDB@@DBBBD@DBD@D@D?FBD@D@FBD@F@@?D@B@BAD?D?FB@?D@D?D@BBFBBBD@D@@@D?DAD@F@DBD?D?F@@?DBFBB@F@F@F@D@D?F?B?D?D?B@D@DAF@@?D?D?F@D?D@B?D?D?D?D@D@D?D?F?@?FAD?B?F@@?FBBAF@B?D?D@D@F@D@D@D?D?FAB?D@F?@@D@D@B?DAF@D@D@D@D?FADAF?DAD?D@D?D@D?F@@@F?F?F@B?DBB?F@@AFA@?D?D?D?DADADADCBAFCDCFADCFCBADAFC@AFCBCFC@ABCDE@?HA@ADAB?@AB@DA@ADCFABAFA@?D?BAD?D?D?D?D?F?B?D@D@B?D@@?D?B?F@B@F?D@BDDBB@FB@?D@FAD@D?D@D@F?BAD?DCDCFCDAFEDCDADCDADCDADEBCFE@CDCDADCDADADCBCDADEDADCBAFE??FC@ADA@ADC@ADC@A@EBC@G@A@G?A@G?A@E?G@GBE@E@G@E@E?E@E@G@E@EBEBCBEBEDCDCDE@ABCBG?ABEDEBEBE@GBCBCDCBEBC@ADC@?DCDCBADADC@ADABCDCBCDC@?DGBABCBEBCDCBEDCDADCDCDCDCBADCFCDEBCBEBG@CBE@E@G@E?E@G@EBE?G@E?E?GEEAGAECGACAEAGCECG?CCEAECGAE?CCE?ACEAACCAEEEAACECCEEEEEGCCCCAEEECCAACCEEEEEECCCCECECCCAACGAACECGCCAEEGAACCEECACEAAEEAAECAAEE?ACCCEAEAACGACCE?CCCAECECEAEGECEAACGAACGAECEAEAC?E?AAGAAAEACAGAAAG?GAAAG?AAGAGAEAGAEAEAG?ACGAAAEAECE?ACECCCIAAAECECCCECCAAAECEAACEEGCCCECCCECECECEAAAAACECEAECCCGCCEA?EEAAEAECAAAAAAECEAEACAE?GAI@G@E?E?G@E?EAG@A?G?E@EBE@E@A?EAE@CBG@GBC@E@CBEBCBEBCDEBCDEBEDA@CBEBCBE@EBCBEBCBCBEDCBA@EBCBCDCBCDCBCBCDEDC?EDA@EBCBCDCDCDEBE@EDCBEBCDEBEBA@EDA@EDA@CFA@CBCDC@CFA@ADCDADCDCBCDCDA@CBA@EFA@CBABCBEBCBCDCBAFCDEDCB?FADAD?DCF?@CFA@AD?DAFCDADAD?FAFAF?D?FADADAF?B?F?B?DAF@F@D?H?BADAF?F@@?F?@AD?FAF?@CD?BCDADCDADAD@DAD?DAH?@ADCFA@?F?BADAFAF?BCDCDA@CDA@CD?@CFA@CDA@CBCFABADCBCBCBEBEBEBE@E@EBEBE@E@E?E@A?G@E?A?G?C?G?AAGAA?GCAAGEAAECEAE?GAA?CAA?GAA?GAAAG?A?EAA?ECA?CAAAEEAAECCCEEAACEACECCECCECEEAAECGECAECECEAG?EAE?EAG?C?G?E?G@A?G@E@EBG@E@E@C@EBEDA?EBE@A@EBA?G@A@E@CBEBA@E@C@EB?@EBCBCDCFEBCDADGDCDGH?D?BCBAFCFCDCDAH?BCF?@AFADAFAD@F?F?D@HAD@D?D?F@D?F@D@F?B@D@F@F?B?D@D@D@F@DBF@D@F@DBD@F@DBDBD@DBDDD@DDD?BBBDD@@BBBBDD@BDBDBDBF@@?B@FB@@D@BBFB@?F@@?D?B@D?@?F@@?DB@@F?B@D?B@F?D@DBHB@?F@FBD@B@F@DBD@D?D?D@DBD@F@B?H@B?D@D?DAF?@?D?FBB?D@F?@?D?H?@@FA@?F@@@D@D?B@D@B@F?B@F?@?F?@?D@D?D@B?F@BAF?@?D@D@D?F?D?D?H@@?D?D?F?@@F?@?D@D@F?D@F@B@D@F?BAF@D@DAD?D@F@@?D@F@B?D?F@@?F@B?F@B?DADAFAB?FCHAFAFADADAFABCDADCDCDADABADCBCDCDCBCDCDC@ADABADA@?F?@AFA@ADADC@?F?B?B?F?B?F?@?F?@?H@@?F?D@@?F@@@F@@?FB@?D@D@@?F@F@F@@@BB@?F@@?F@@?D?F?@?F?F?DAHCDCDCFCDCBAFC@AFE@CDADEBADADE?ADCBCDCDADEDCDCDC@?DC@ADCDCDC@EBCFC@?@EDEDE?ADE@ABE?ABG?ABG@C@E@E@E@EBE@A@G?A?EBG?A@G?A@E@E@GBEDEBE@EDG@A@E@?BC@ABCBEDADEDCDCDCDE@ABC@ADABCDE?AFC@ADC@?DEFCBADADE@?DC@ABCDCDC@ADEBADEBCDCBEDCFC@CFC@ADCBCDE@A@G@G@G@E?I?C?C?G?C@AAE?EAGAGAC?E?GAG?CAGAAAECICEAE?CCG?EACAEACAGACEEAAEE?ACCECCEAAECCEAECECEEEAACCEEAAGEA?CECCEECCCECCCCECAAEEAAEECECCCCCECCEECCCGCCACEEAAEACGAAAEAAAGACCECCAEAGAEEGCEAAAEACCGAAAECC?G?AAG?CAEAEAEAGAAAGCEACCIAEAIACCCCE?CAEACAEAGCCAGACCEAACEAACECGCECEAECEAECEAACGAACEACAEAAACAEACCECEAACCEEAAECECCCEECACCEEEEEAECCAGCAAECC?EAAAEAEAE?EAE?GAI@EAA?G@E?G?E@G@C?E@EBGDA@E@GDCBE@CBEBGBA@EB??EBCDEDA@CDEBE@A@GBEDCBCBEDEBCBCBCDEBA@CDCBEDC@CBCDCDEBC?CBEBCDC@EBCDEDA@EDA@GBA@EDC@EDA@EDC@ADEBADCDCDA@CBEFA@CBEDA@ADCDCDABADCFA@CDA@AD?BCDCDEDABEDABCDAFCBCFA@CBAFADCF?BCDAFADAD?@CBAFAB?F?F?FAFAF?@AH?DAFABAF?@?FAB?DAD?FAF?@?D@H?BAD?F?@?F?BAF?@?F?@AD?FADAF?DAF?FA@AF?DAF?@AFA@?DAFADADCFADCFA@CFAB?@CBCBCBCBCDEDA?EBC@CBEBEDA?CBGBA@C@A?EBA@G@C?ECE?ECE@C?E?A?E?A?GCAAECEAA?EAEAA?EAG?A?GAA?EAA?GCE@ECEAEAE?CEAAEC?AECCCCEECAEEECEACCCECCCECEACEGCEAEAGACCEAAAGAA?GAIAA?C?GCAACAGAAAEAA?A?ECAAACAAACAAECA?CAA?EAA?ECA?EEAACCCACCECCCCECCAEEEAAEEACCE?ACE?AEEECCCCGEE??CECCCGAACGACAIACCG?M?K?M?K@G@EBEDCBEBE?A?E?E@G?G@E?GBG?A@E@E?E?A@GAA?EAGAI?EAGAECECEEEACCCCEEA?EAECECCEAE?E?EEAACCECCAG?C?GAC?E?C?G?E?E?G@G?A@E@GAA?C@E?E?G?A?E?E?G@G?A@G@E?CBE@E@A@G@A@E@EDA?G@?@E@EBA?E@A@E?E@A?EBC?E@C@C@A@ABA@@@qAY[SPBBF@?EGCA?AA?AEACCEAC?ECIAEAECECECCCCCCCECECEACCCCECGAGAECGAEAGAEAEACEAAAC?C?CACC?ACCGKEGEGGIEGEGGIAEAEEGACCE??CEAA@G?A?GAA?EAACEAAAEEEEECEACCE??CGACCCCGAACCCGAAAECGCEAECG?CCCAGAEAG?ACE?ACEAACGACAECEAECEAEAGAACGEGAACG?CCGAACGAACEAEAAEECCAEACCECE?AECA?CEAACE?AGIAECECCAEAECEAACG?ACEAAECAACEAACEEECEAACG?A?GCEAGAEAGAE?EAGAECEAAACAACG?ACEEGAACECCCGCECCCECEACAEAEAGECAAACAA',
    startDate: '2021-07-06T11:26:15Z',
    startPosition: {
      lat: -23.582972,
      lng: -46.659517,
    },
    time: {
      elapsed: 2125,
    },
    type: 'Run',
  },
  {
    athleteId,
    distance: 6400,
    elevation: {
      gain: 38.3,
    },
    id: '5594174613',
    name: 'Corrida matinal',
    pace: {
      average: 319,
    },
    polyline:
      'v`}nCtpx{GX??HDBDF@F?B@D@F?F?D?FFHB@DB?H@F?DBH@D@D@F?D@DBDBDBDBF@@DDBD?D@BBDBDDBB@DBF?F@F@FB@@D@F@FBDBD@@@F@BBD@DBB@D@D@F?@@BBFB@?F@B@D@B@D@D@D?F?B?F@@@D@D@F@D?F?@@F?D@F@F?D?FAD?DAD?F@@@D?D@D@D@@?D?D@B?F?D@D@B?D?F?@?D?D?F@D?DAB?F@@?D@D@D@D@DAF?D?F@D@D@FBD@F?B?D@D?D@D@D@D@D?D@D@D@D?F@B?D@D?DAF?@?D?D?D@F?@?F@@?F?F?B?F?F?@?F?@?HCD?FAF?D?F?@?DAFA@?FEDCFC@AFCDCBADCFABAFCBABCDABC@ADCBCDAFA@?FA@ADAD?D?@?FCDAD?D?F@@?FADAF?D?D?D@D?F@D@?@DAFBB@D@F@@?F@@@D@@?F?@?F@@?FBD@D@F?B?F@DCF?FCBCFCFCDADC@ABEBCBEDEBCDEB?DA@AFCBABADEDCBCDAFC@AFC@?DCBADCDCDE@ABEBG@A@EBEBE@E?E@C?E?C?G@A@IBE?G@EBE@EBE@CBE@E@G@ABEDEBE?ABE@ABE@ADGBCBCDCDCBCFE@CBCDCBABC@ABEBEDC@AD?BABCDC@?DC@ADC@ABCDCBCBCFE@ABCDCDEDEDCBEDEFE?ADEBCBEDGDE@E@G@EBE?C@G@C?E@G?G?C?E?GAA?G?ECCAE?G?AAEAGAG?CCEAGAEAECGCECC?ACG?AAGEEECEEAAGCECCCECEEAACEEGAACECECEECECEECEC?CCEACCECCCCCGCAACCECAAEE?ACEAAEG?ACEAACGAACECEAECECEACAGACCECG?AAEAGAAAECG?AEG?AAECGAGACAGAE?E?EAG?CAEAG?AAEAECGCEAECEAGAGAAAEAECGACCCCECEACAECECCCGAAECEEACCEAEEGCACCAECECCAECECCEEACCECACECEECECECA?EAGAA?EAAAE?A?G?A?EAEAE?EAAAGAA?E?C?E?GAA?G?G@G?E@EAG?AAE?E?G@A@E@E@EBCBCBG@CBA@EDA@EDCBEBGBC@C@CBEDEDE@A@CBEDA@CBEBA?E@CBEDEDCBEDA@CDEDA@CBEDA@EDCDA@E@CDE@CDGDA@C@CDCBEDA@EBA@EDA@ADCDCDEBA@CFA@CFA@CFA@ADEFA@CDCBEDABCDA@CD?@EF?BCDCBAFCDCD?BCDABCDCF?@CF?@CFA@CDCFA@CDAD?DAFAFAH?DADAF?DAFADAH?B?DAD?H?D@FAD?F?H?B?D?D?D?F?F?@AF?@AF?@?FABADAD?F?DAFAD?DAF?@?DA@AH?FADAFADCDCFA@CD?@EDA@CD?@EDA@C@EDCDEBCBCBEBA@CBEDA?EBE@E?GBC?E@A@G?C?EAG?A?ECA?GCC?EAEAAAE?EAECA?GCE?AAGAA?EAAAECEAECC?CACCG?A?EAECCAECAAECAAECECEECECECCCECCEAEAGCECCAEAECC?EAE?E@E?G?G@C@E?G?A?E?G@C?GBA@E@E@A@E@G?E@EBE@A@EB??CBA@EDEBC@CBEBEDABCDCDA@CDADCDCDABCBADABAFA@ADADCDCDCD?F?@AF?@CF?@AF?F?H?H?FAD?DAB@D?DDF?H?D@D?DBF?B?D@F?@?FAD?@?F@D@F?DBF@B@F@@@F?@BDBF@@BBBD@DBD@DBDDD@@DDB@DDDBD@DBDBD@@@FB@@FBF@D@B@DBB@DBF?B@D@D@DBF@@@D@F@@AD@D@D@@?D@D@F?@ADAD@BDDBB@F@D?D@L@D?B?DAF?F?D@BAD@D@D@@@F@D?D?F?@?D@F@@?F@@@F?B?F@@?D@D@D@DAF@@AF?@?F@@?F@F@D?FADAD?F?@@FB@@D?D@FAD?D?F@@?D@F@B@D?D@D@F@@@DBDBF@B?D?D@@?D?B?D?D?@?F?B?DAF?@?D@F@H?B?HAD?D?FAB?D?DAB?D?D?B?FADAFCDCDADCBADCFCDCDCB?DADC?ADADCBABC@?FCB?DAFEBABCDABCD?F?BAD?B?BCFADAF?@AD?F@@?D?D?B?D@D@B?F@B?F@B@BDD@DBDB@@DBB@D?F?F?D?D?B?DAB?DABADADEBADCDEBADCDCFC@ADCDCBCDA@?DA@ADABABCDE@ADCDCDCFADC@ABC@ADC?AFC??BC@A@E@?BI@EBE@EBCBG@ABG?CBC?GBE@G?A?C?C?E?G?A@G?A?G?ADC@ABCFEDEDGDCBEDCBEBEBCBE@ABCBEBCDAFC@ADC@ADC@CBCDE@?BC@AFC@ADCDCDC@ADC@?BEDCDE@ABEDEDCBADE@ADCDEBCDEBCDEBEBEBG?CDC?ABG@C@CBG@EAG?G?A?E?E?E?G?GAEAECEACAGAAAEAACEAECEAECCCGCEAAAEACCE?ACEACECAACCAAGCAACCECCEECCECEECEEAAEEAACCCEAACEEE?AEEA?EEAAACECECECCCECCEAAEEAACEAACECECCCCCCCEAECEAEAGAAAEAECI?AAAAC?GAG?AAEAACCAGACAE?I?AAE?GAEAC?EAE?G?ECG?CCG?CAEAEAEAECEEECECCEICCCCCGAAAIAACE?ECECCCECCAECCCEAACEAAEEACAEAACG?AEGAACCCECECACAECEEEEEEECCCGCAAG@AAGAAAEAAAEAC?CCCAE?I?A?G@G?G?G?G@G@G?C@E@E@E@C@E@E@EBC@G@EBE@EBC@A@E@CBA@EBCBCFEBCBE@EBA@C@EDABCBG@A@CBEBCBCBEBCBEDC@CDC@CBCDABCBCDCBEBCBCDEDA@CDA@ADGBA@EFA@EDA@CDA@CBCBCDEFABGDCBEBCBADA@CDEDABCDA@CDA@CDADCDABAFCDA@ADABA@CFABCDADADCF?@CFAFABABA@EDAFA@CDCDAD?DADAD?FAD?F?F?D?FA@?FA@?F?F?DAF?@AFAF?F?D?D?D?DAD?D?F?@?D?F?@ADAF?BCD@DAD?FADAF?@AH?@?DADAF?DCFAFA@CDCDABCFA@A@?BCDA@CDCDCD?@CDA@EDA@CBEDA?EBEBEBE@CBA?G@A?G@GAA?EAEAEAEAEAAAEAA?ECA?EAGAA?EAECEAA?GAAAE?GCA?EAEAAAEAAAE?CCIAA?EAGCA?ECAACGAACEAAAAACCCACCE?AECECEEECCAEEEAE?EAEAE?CAE?A?E?E?ECC?CAE?CAECAAC?C?AACACAAAECACEAEEA?EEAAGCAACCCECEECCCCCCGAAAE?AAEAAAE?AAEAEECCAEAEC?ACEA?EGACCEACCC?ACEAAAG?AAI?Q?KAGAE?E@EBE@A@EBC@ABCBE?C@G@A?G@G@I@G@EAI?AAECEAEAGAEAGAE?GAEAEAEEEECCECEAAECEAC?CAEAC?CCGEAACCGAECGAA?G?CAG?C?E@G?G?G@A?E?E@C?EAC?G?C?E@E?A?E@E?C?E?E?E?C@G@EBA?EBC@C@E@C@C@A@?@A@ABA@ABA@kD}@CEACCEAECCAEAECCAECEACCEAEACCEAECCAECCAECGAE?A?C?AEAA?EAC??CAAAE?E?CCCAECEAEEEAEEEAACECCCGCECECEAACGAA?G?CACAACCA?CE??GEAACG?ACECAAAEEA?EGCEAAAECEAECCAEAECG?CAECGAGEECCCECCAIACAGCKAIAEAGAIAECGAEAEAECE?ACGAACG?ACGAAEEAEAGAAAEACCGAACCAIAACEAACEAECG?ACEAACCCCCGAEECAECCECCCAAAECEACAGCEACAI?AAGAEEC?EACAE?CAECGAAAGACCECECCCEACAA?ACECEACCGECAACCAAAEAA?C?AA?CAAAA?ECCCCECKAG?GAG@ICE?ACGACACECAEACACAAAEAAAECGAAEAECECACCE?CCEACAA??AACCACEECGCGCICGEECIAECG?ACEAAECCCAGAG?AAEAACGCCCGAAAC?GAACCAAECCEAECCCEAACCAA?E?C?CAE?A',
    startDate: '2021-07-08T11:10:15Z',
    startPosition: {
      lat: -23.583003,
      lng: -46.661385,
    },
    time: {
      elapsed: 2046,
    },
    type: 'Run',
  },
  {
    athleteId,
    distance: 4980,
    elevation: {
      gain: 13.0,
    },
    id: '5600369237',
    name: 'Corrida na hora do almoço',
    pace: {
      average: 310,
    },
    polyline:
      'fd}nCpxx{GdAs@TTHHEHDDDB@D@B@@BBB@H@F?F@J?F@DAB?D?B@BBB@B@F?D@B@B@@?B@H?D?H?D@F@D@F?D?D?D?D?D?D?D?B@D?D?F@D?D?D@D?D?F?DAB?D@D?DAD?D@D@F?D?D?B?D?D?D@D?F?D@D@D@D?F?B@B@B?D@F@D?D@F@B@F@F@D?D?B@D@D@F?D@B?D?D@D@J@D?F?D?F?D?F?F?D?F?D?F?D?F?D?F?D?F?D?F?D?FCBEDABEDCBE@ABCDCDAD?BA@ADCB?DABCDCB?D?DCD?DAD?FADA@?F?D@D?D?D?D?F@@?DAF@@?FB@?B?D?F@DBD@FBF@DBF@@?D@F?@@FA@ADAD?DC@ADADEFCBCBEDA@?DCBCDA@ADEBADAB?F?BCFC@?DCDAFCDAFCDADAFAFCHCFCDCDE@ADC@ABEBE@EBGBGBGBG@G@G?GBE?ABE@G@C?GBC@EBEBEBE@E@G@ABCDE@GDEBGBCBEDE@A@CDC@ADC?ADC?AFC@ABCDC@ABC@ADC@ADC@ABA@?DAFCBCBEBEDEBCDC@ADABADEBCBADCDCBCBE@G@ABEBEBEBEDEBGBG@I?C?G@G?E?E?GBG?A@ECGAGCGAEAEAEAAAGAGAE?ECEAAAG?GCCAAAE?GAGAECGACAECCECAEAAEEAACCEECCGCCECACCCEAEA?GECCCCAGCECCCEAAEEAAEGAAEEAAAECCAEEECACEECCEEEEE?ACCCECECECGAAEEAACC?AAEAECGAACECGAACECEAEAECECG?G?G?CAGAE?G?GCGAG?E?CAEAECGACCECGACAEAAAGCEACCEEEAEECCCEECGAAAGEEACCEEECEAACCAGAAAECEEEACECA?ECGCECECECCEGAAAGCA?ECC?EAA?CCG?A?E?EAE?G?EAE?E@E@E?C@EBEBE?A?G@A?G@E?G@E@E@E@EBG@C@G@C@GBC@E@EBC?CDA@EDC@C@EDEBEFA@CBEDEBEDCBEBCBEBC@CDCBA@AFEBA@EBEDA@CDEDGBCBEDEBCDCBEDA@EDCBEFA@CBCBCDCD?D?FADEDCDADCBEBEBCBEFCDCFABADAFA@CDED?@CFADAFCDADCDCF?@EDADAFA@CD?@CDCFA@CDADCD@H?FAH?D?F?D?FAD?DAD@F?FAD?H?HAFAD?F?D@F?@?F?@?F?DAF?@AF?@?DAD?DAH?FAF?@?D?F?@ADADADCFA@CFCFADEDCDA@CB?@EDA@CBEBAFEDA@C@EDCBA@C@GBA@E@GBE?CBG@A?E?G?A?G?A@GAGAA?E?C?CAE@G?A?EAGCEAEAG?AAEAGAA?GAA?ECA?EAECCCE?EACACAEEAAEACACCECECECCAECCCCEEECCGEAAEAECE?G?EAE?E?E?G?C?E?E?E@E@C?E@E@EBA?E@G@E@E?E@E?GBA?EBEBCBEBA?CBEDC@EBEBCBADEFABCFEFCFCDABADCDCD?BEDA@CDAF?DCHADADADCDADAFA@BF?HBH?D?F@F?D?F@F@D@F@F@D@F@BAD?BBD?@BD@FBDBD@FBB@DBF@DBD@DBD@BBBBDBDBD@DBD@DDDBBBD@B@BFBB@B@DBD@DB@?DBDB@@F?@?BBFBB?D@DDF@@?D@@?D@B@D@DBFDD?D?D@F@B@D@BBDADDDBD?D@D?FAF@FAB?D?D?H@D?D?FABA@AB?F@B@F@@@D?@?F@@?D@@?F?@?D?D@F?@@D?D@B?FB@?F@B@D@F?@AF?@?D@D@F?DAD?F@F@F@D@D?D?@?F?@?F@@?D?D@D?F@B@D@HBD?DBD?D@D@D?DCD?DAD?F@D?F@F?DBF@F?B@F?B?DA@?D?DAFAD@D?DAFC@ADCDADCDEBCDCDABCBCDADADADCDE@ADABAFC@?FC@AD?@?F?@?D?D?DAF?@AFA@?DAD?D?BAD@B?D?D@FAD@F@F?@?DADAF?F?F@FBBBFBB@BBDB@?H?B@F?BAD@D?B?DEBAFAFEBADCDCBA@ADCDADCFA@ADCFA@ABCDADC@ADCB?BCDCBEB?DC@?FC@ADE@ADC@ADEDCBEBG@E@I@GBGBG?C@G@A@C@E?A@GBEDE@?BEBEBI@E@EBE@EBE@EBE@E@A@E@E@ABEBE@ABC@AFC@CBC@ADC@ADCBABCDC@ADA@?BCDEBABCFCDABCDCDCDADCBCDCDCBCFCBADCBC@ABE@ADE@E@EBEBEBEDC@A@E?EBG?C@G?E@G?I?A?E?GAE?GAE?GAG?A?EAE?ECGAEAEAGCG??CECI?CCEACACAECECEAACEAAEEAACEAAEECEAEACCEEEAECEAAGCCECE?CEEECCECEEEAAEECAAAEEECECAACCCECEAGAAEECCECAACCAAECAACECGAACC?ACEEEACCEAGAE?AAG?AAGAECEAACECEAEAI?AAEAE?E@GAGAEAGAGAEAECECG?CCEACCGAAAG?CAEAEAAAEACCGCEAECEACAECEEGCCCGCEACCEEGAACECECCEEEEAACAEEA?ACAACCAAECCCGAAAEAEAAAEAA?EAECC?EAA?I?E?G?A?GCEAGAA?G?A?G?E?E?G@C@E@EBE@EBE@C@IDGBEBE@EBEBEDA@EBEDC@CBEDA?CBEDEBCDA@CBCBA@GDGBE@CDEDEBCBEB?@EBC@CBEBCBEDCBCBEDEBA@CBC@CFEDABCBADCDCBEBCBCDCFCDCBEDCDABCBEDA?CFA@E@CDEDCDCDA@CDCBCFABABCFABEDA@EDCBADCF?@AFA@?F?DAFA@CDAD?@AFABCFABCD@HAF?D?F@DAH?B?D?DAD?BAD?DAF?FAH?D?H?F?@@F?B?D?@AF?@AFAB?FADAFAD?BADAJADCD?D?D?D?F?BADAFCDCDADCBAD?BCDA@CBADA@CB?@CDA@ABABCBA@EBEBC@GBA?E@A@E@E?E?E@C@G?A?GAAACAG?E?E@E?E@CAC?EAG?A?GCA?ECE?AAEAE?E?A?G?A?EAA?E?C?EAA?GEA?EAGEAAECAACCECCEECA?GCEECCECAAEC?AECGEEAGACAEAEAEAE?E?E?G@E?E@E?G@A?E?GBA?E@G@E@E@G@E@E@E@A?G@GDE@EDGBEDCDCDCHCDCDEDCDAFCFCFAF?DAFCHADCD?FA@CDADAB???BA@?@?BAB?@AB?BA@A@?D?@?D@@@@@@?D?@?F??AD@@?@?D@@@@@B@B?@@??B@@?@?B?@?@?@?B?@?@AB@@?B?@?@@@?@?@?@?B@B?@?@@@BB?@@@?@@?B@?@@@@B@B@B@@@B@?@@?@@D?@?FAB',
    startDate: '2021-07-09T15:42:15Z',
    startPosition: {
      lat: -23.583557,
      lng: -46.662654,
    },
    time: {
      elapsed: 1545,
    },
    type: 'Run',
  },
]

export default diego