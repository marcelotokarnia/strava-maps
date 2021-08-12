import { ParsedStravaProfile } from '@tokks/strava'

const athleteId = '88032043'

const viPiton: ParsedStravaProfile = {
  createdAt: '2015-11-21T00:38:38Z',
  id: athleteId,
  name: 'Vitoria Piton',
  picture:
    'https://lh3.googleusercontent.com/a-/AOh14GignQiwaHe60aJ3S1rO58V0noicYvWTd8qNmKTSLw=s96-c',
  username: 'mtokarnia',
}

export const viPitonActivitiesV3: any = [
  {
    athleteId,
    distance: 2610.0,
    elevation: {
      gain: 52.2,
    },
    id: '5586581658',
    name: 'Corrida ao entardecer',
    pace: {
      average: 541,
    },
    polyline:
      'xrgoCprg{GC?A?A@C@A@CBABC@C?E@C?AACACAC?ECAACAAACCCCAAACCAAAAAAACAAACCAACAAACCECAAECA?CC??CCAACAAACAEC??CAAAA?EAAAA?C?AAC?AAAAAACCA?AAAAA?ACCACAAAECAA?AAAA?CAA?A@A@CAA?AAAAA?AAC?CACAA?AAA??ACAAAA?AAA?AAC?A?C?A?C?A@E@A@G@A@A@ABC@A@ABA@A@CBA@?@A@CB?@CB?@A@ABA??@A@ABAB?@?@A@ABA@?@?@ABA@?@?@A@AB?@A@?@ABA@ABA@ABABA@ABA@??ABA@CD?@ABA@?BA@?@CD?BABABA@?@?@?@@D@@@B@@D@@@@@@@@B@@@@?@@?@@?@@????????????@??????@@A@?@?@A???@A?A??????????@?@???A?@????@????@?@B??????@@@@@@?A??@????@?A??@@D@@@?@??@@??????AAA?AAAAAAAAAA??AACACC??AACAAAA??AA??ACCACA?AAEA?ACAAACCA?AACAAACCCCAACCC?EAC?CCCAAAACAACAC?CC??AAC?AACAAAA?ECAA?AA?AA?ACAACCCACAAAA?AA??A??AAAACAAAEEEAACCACAAAA?AAA?AACA??A??AA?AAA?ACACAA?AAC?C?E?A?G?C@CBE@E@C@C@ABG?A@C@A?C@A@C@C@C?CBC?ABE@A?A@A@C?A@CBA@C??@C?A@A?ABE@A?A@A@C@A?A@A?A???A@A@A@E@A@C@ABE@A@ABABCBABADCB?@?D@@?B?@????A@?@A@?B@?@@B?@@F?@@B?@?B@B?B@@@B?@?BB@@@@@B@DC@ABG?A?E?A?A???A?????A@?????????@??@?????????????A?C???AA?A?CAA???A?????AA??CAAAAACCAAECAAAACCCAACCCACAAAAACACCC?AECAAEAA?CACAA?ECA?EAEAGCA?EAEAG?C@C?C@A?CD?@A@C@AF?@CBA@E?A???C?EAGBC?E?ECAA?CCEACCCAAACC?AAE?E?A?A?C?E@A?C?C?C@C@A?C@G?A?CAE?E?E?E@C?G?G?A?CACACEAAAEAECGAEACCG?CAAAEAEAE?AAGAAAE?C?AACAEAECIACAC?AACAE?CACAE?C?AAEAEAA?E?AAC?E?E?AAE?CAA?CAA?CAC?CCE?AAEACACACAAAG?A?C?A?C?AAC?C?CAA??AC?A?AACCAACAA?AACACAAACAACAACCCA?CCA?AAAAACAAAAAAEAACAA??CCAAECAACAC?A?AAE?A?C@C?E?A?C?A@C?C@EBA@CBA@C@A@A@??CBA@CDA@ABABA@?@CBA@C@A@A@ABC@?@A?ED?@CD?@?@?B@B@B?@BB@B@B@@?@@B?@BD?@BF?@@B?@?B?@?@?@?B?@?@?@?@?@?B?B?B@@?B@@@D?@@B?@@@?B?@@D?@?@@B?@?@A@@B?@@B@@BD?D@@@F?@@F@B?@?F?B@B?B@D@@?B?B@F?@@D?@?B@B?B?B?D?B?BA@?@ADABA@A@?@ABA@A@EB?@A@C?C@ABCDA?C@ABCBABED?@GFCBABCFEDA@CA?AA??C?AAGAC?A?AAC?CAA?AAAAAAAAAA?CAE?A?EBA@E@A?A?A?AC@C@I?A@A@C@A?E?A?E?A@E@G?A?G?A?E?C?EAC?A?CAC?AAC?CAC?CAA?I?A?CBC?C@C?C@C@A?C@C@A@@B?@BBBBBBDBD@B@@D@@@D?B?B@B?B?F@@?B?B?D@B?B?B?@AB@@@BD@?B@BBBB@B@BBF@F?@@F@@?D@@@D?@@D?@@D@@?B@B@D@B?B@F@B@B@B?BBBBDBABA@ABA@CB?BCBABA@?BABAD?@?DA@?DA@ADA@ADA@ADADA@?DA@AB?DA@AFAB?B?D?@AB?B?@?B?B?@@@@@@B?B?@?B?B?@AB?@AFA@?@?BA@?B?@?B?@@B?@?DAB?D?B?B?B?B?B?BA@@B?@?@@B?DB?@@@@BB@DBF@B@@?D?@?B?B?@ADAD?@A@?D?DA@?@ADA@ABADA@??A@A??@C@ADC??@A@??ADAB?@?BAL@F?H?NBBB?@?HET?A@A@?@A@??@?@?@@?@?B?@?B?D@B@D@@D@@BF@?B@B@DB@@@BFD@@@@BB@@@@@@@@B?@?B?DA@?@A@?BAB?@@@??@@@B?D?BA@?DA@?FA@?DC??DC@A@A@A@ABC@?B?D?@?@?B?BABABE?ABIAAEC?CAC?C?A?CACAC?C?A?C?A@C?E?A?C@C@C?CACAAAE?AAA?CAAACAA?AACACAA?A?AA?ACAAAAACAAAAAC?AAC?ECEA?A??ACACCAA?AAAAAAA?C?A@AAAAAAAAA?A?A?AA??AAA?CAC?C?A?G?C?E?GAA?C?C?C?A?C?A?A?C?A?A?C?CAA@A?G?A?A?????A?A?A@???@A@AB?@@D@@?@?@??????G@C@A?A?C@?????@A??@??@@@B@@@@@DB@@BB@@B@@?@@@?@@@@@@@@BB@BBBBD@D@B@BBF@D@DjFlD',
    startDate: '2021-07-06T21:37:15Z',
    startPosition: {
      lat: -23.637085,
      lng: -46.574647,
    },
    time: {
      elapsed: 1416,
    },
    type: 'Run',
  },
  {
    athleteId,
    distance: 3050.0,
    elevation: {
      gain: 29.3,
    },
    id: '5613210570',
    name: 'Corrida ao entardecer',
    pace: {
      average: 577,
    },
    polyline:
      '`|goC`oh{GG?A?CBA?C?E@G@A@C?EBA?A?C@A@E@A@G?A?C?C@E@A?A@E@A?A?CAC@A?CBC@EBC@A@A@GBA@CBCBA@A@A@EBA?C@A?E?A@C?A?C@A?A@C?A@C?C?CBA@A?A@A@A?C@C?A?AAC@C?A?GAA?A?C?A?A@A?A?C@A?A@A@C@A@A@ABA@A@ABC@?@C?A@A??@ABA@C?A?EAE?E@C?C?C?AAE?E?A?A?C?C@E@EBA@C@A?C@A@C@A?C@A@AB?@A@?D?B?D?@?@?D?@BF@B@B@@@B@B@B?B@@?@@@?@?@?@ABCDA@ABA@ADC@A@EBEBA?A@AB@B@@@@@@BBB@@?B?B?B?@?BCBC@A@A@A?A@A@?B?B?B?D?B?D?@?D?@?B?FAD?@AB?FAB?@?D?BAB?B@@?@?@AD@D?@?B?@A@?@?@?@?BB@?@A@AB?BA@?@AB?BA@?H?@AB?FA@?BA@ED?@ABA?A@?BA@?@@B@B@@B@D???@?B?D@@?B?@@B?B@B@@@@@B?@?@?B?B?@@B@D?@@B?@@B@B@B?@B@@@B?@@?@?B?@A@?@A@A@A@A@E@A@C@E???EBA?EBC@A?E@A?A@C@A@A@C@A@A@CAA@A?E@A?C???A?C@A?CAA?C?C?C@CAC?A?A?CAA@C?A?A?AAA@C@EDA?A@EFA@ABA@ABA@C@A@??EBA@A@A@EBA?E@A@A?A@C?C@A@C@C@C@A@??E@A?A@C@C?A?C?C@A?EAC?A?EAA?C@A@A?A?A@A?A?C?CBA@AB?@?@?F?@@F@@BD@D@B@D@B?BBF??@B?B@D?@@DAB?@@BB@?DC@?@?B@BBB??BB@?@?@@?B@F?D?@?D?@AB?@@B?@@B?@@F?@?B@DDB??DB?@DB@@?@@?@@??@@?@@?@D?B@FA@AD?BADA@C?ABABC@ADDH@F@@@@?BDB@@@B?@@B?B?B@B?B@B?D@B@B?@@D?@@@@B?@@D?B?B?B?D@D?BABC@A@A@A@A@C@CBA@?@C?C@?C?A@?FA@A@?@??AA??A???A??????@?@?@@D?@?B?@?B?BA@A@ABC@A@ABA@?BADA@A@ABA@?@ABA?ED?B?@?B?B?@@B?B?@?B?B?@ADADC@?@@B?@AB?B?B?B?@C@ABABA@?@?B?B?BA@?B?D?@AB?D?@ADAD?@AD?@ADA@?DA@?BAD?BABADA@?DA@?BAB?D@@ADA@?@ABA@?@ADC@?BCBAD?@?FAF?@AFA@?@?F???BABA@?BAB?@ABABC@CAA@C@E?E?GAE?AAG?CCGAG?A?GA??C?CAC?C?EACAC?CAA?CACCC?ACE?ACAEECAC@C@C?A?C@EBC@A?C?C@C?C@E?C?E@C@C?CBE@C@EBA@C@C@C?C@A@A?C@A?C@C@C?A@C?A?A?C@C@A@E@A?C?E@A?E?C?C@E@CBC?A@E?E?EA??C?A?C@C@C@C@A?C?A@C?A@A?C@C?A?A?C@A?C@C@C?A@C?A?CAC?C@A@C?C@C?A?C@E@EBA?C@E@C?EDCBE@C?CAE?E?C?GBA@A?CBA?GBA?A@A@A@C@E?E?I@A?C@C?A@G?A?E@EBE?E@C?G?E@EBGBG@E?G?C@KBE@G@G?E@E@EBE?G?C?E?GAG?E?G@IAGAIACAAACAEAECA?CCCACAAACCA?CAA?CAAAAEACAACC?ACAAACCAAACCCACAACAAACCACCCAACE?ACAACCEA?ECAAC?C@A?G@A?A@A?A??C@CBCBAD?D?@?D@B?@@@@FF@@@@?B@DBD@@BD@DBD@DBBBDBDBBDDBDBBD@DFF@FBDDB@BBDBBBBH?FADCH?DAHAD?FAHAFAHA@?F?FBDDFBBFBFBD?@?D@B@D?@?B?D?B?B?DAD?B?B?@?@?@ABADC@ABADABA@ABA@?BAB?B?B?DA@?B?BAB?B?@AB?DA?ADC@A@AB?@ABAB?D?D?@AB@D?@?@AB?DC@?DA@?B?@?BAD?D?B?@?DCBADAF???@A@?D?BA@ADCBADABABABC@C@A@C@A@C?ECC?A?E?C?A?G?A?C?E?C?CAA?CAC?C?CAC?GAC?AAC?C?C?C?C@C?CACAEAAACAA?AAAACAAAAACAC?CAG?AAI?EAK?I?EAG?E@G@EBEDEFAFAFABAFADADAFAFA@?FAFADAD?HCDADAF?FAB?DADA@ADA@?@?DC@?DCDC@A@AD?@ABABA@ADA@ABADADA@?@ADABCBA@ABC@AB?@?D@DABAD?F?B?FA@A@?B?B?BA@?@?BC@A?A?ADC@A@A@A@A@C?A@A?ACCCCA?AC?C?EBE@A?A?CAA@C@C?C?E?A?C@A?A?C@A@ABA?C@A@C@A@C@C@C@A@E@ABA@A@A@A@A@ABC?A@A@A@C@A?C@A@C@C@E@A@C@E@A@C?A?EBE?A?C?G?AAEACAC?AAAA?AA??AAAA?E?C?A?A?A@C?A@?BE??DA@?BC@CBK@C@C@E@A?C@CBCBC@C@A@ABC@AB?@?B?@?@@B?B?B?@A@?DA@?BA@ABA@ABA@A@?BABA@AB?@A@ABA@ADC?A?ABA@?@ABA@AFC@A@ABC@C@A@ABC@A@A@A@A@A@C@ABA@C@CBCBA@A@A@CBC@A@C@A@A@A@A@A@A@A@A@ABA?CBA?A@C@C@A@A?ABE@A@ABADAB@@@?ADC@G@?@I@C?A@EBE@A@EBABA?ADA@C@A?C?A?C?A?C?CAAAE?A?C?A?C@CAC?CBC@A@A@A@A@A@A@A@A@@B?B?BA@A@C@E@E?A',
    startDate: '2021-07-11T21:15:15Z',
    startPosition: {
      lat: -23.638566,
      lng: -46.579208,
    },
    time: {
      elapsed: 1763,
    },
    type: 'Run',
  },
]

export default viPiton