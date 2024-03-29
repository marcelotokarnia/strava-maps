import { ParsedStravaProfile } from '@tokks/strava'

const jords: ParsedStravaProfile & { shortname: string } = {
  createdAt: '2015-11-21T00:38:38Z',
  id: '81168427',
  name: 'Jordana Longaray',
  picture:
    'https://lh3.googleusercontent.com/a-/AOh14GjNzReF1WlR6i1PsKuOu3ryaHA62D1Z3UnXQqkhCw=s96-c',
  shortname: 'Jordana L.',
  username: 'mtokarnia',
}

export const jordsActivities: any = [
  {
    athleteId: '81168427',
    distance: 7010.9,
    elevation: {
      gain: 53.1,
    },
    id: '4983691893',
    name: 'recomeço',
    pace: {
      average: 421,
    },
    polyline:
      'jlqlCvsbwG???@??A@EAE?A?EAA?C?A??AACAAA?AAA?A@C?A@C?E?A?EAAAEAA?CCACCAEGEECCCAE?E?A?A@?D@BBF@@@B@@@@@@@B?@?@@@@B@D?@?B?@?BCDIGUOOIMKOKIEGCGCGCKEMGEAEAG?ECIAGCECA?CAEAC?E?CAG?A?GAE?ICKEE?A?AAC?EAA?I?G?C?E?G?IAGAA?GAA?I?IAECC?ECG?G?G?E@GAC?K?C?GAGDCBAF?B@D@H?@ABCHAD?NAHAB?@CBA?GBE?CACCGECAEACB?H?B@D@F?HADA@ABABAB?B?D?D@D@F?@?F?F?B?D?H?B?B?F?@?FAB?B?DCF?DAF?@AH?BA@?F?@?F?B@D?F?BAFAB?DAD?F?H?D@D?@BF?@?F?B?FA@CD?BCFADABCFAHA@AFAH?D?F?FDD?@BB?B@F?@?D?FAFAFAB?@?DCBAD?F?D@H?D@H?H?F?H?D?DAB?F?F?D?@AF?@AFADADA?@F?@@D?@@B?@?BAFAF?@?B?F?@?FA@?D?D?DAH?F?J?F?FAF?HAFAHCFABCDCD?F?@?D@B@D?@?@?@?@CB?@A@A@EB?@A?A@A@?@AB?@?B?F@@BF?BBB@DBF@D?D@FAF?F?HAD?H?FAF?F?FBF?B@DBF?F?@@D?B@D?F@D?D@D?D@D?F?DADAF?@?FAFCFCFAF?@?DAD@F?B?F?@?D?F?H?B?H?F?DAF?@@FA@?F?@?F?@AH?BAF?B?F?B@D?F?D?D?F@F?FAD?HA@CHA@?BA@AB?D?B?D?D?D?B?HAD?DAF?F@D@F@F?H@F?D@D@B@@@?B@BD@@BDBH?F?HAHCD?FAD?B?FAHAF?H?H?F?@?F@F@FDL?DA@@F@B@D?BBH?D?D@F?J@D@J@D?FBHBDDH@B?@?B?@BH?B@F?@@@@BBB@@BHDDBDBD@DAJ@F@D@F?@DDBD@DBF?@BD@DBDDFBBBD@FBBBBBB?B@@BDDBBBBBBDBBBFFH@B@B?D@@@BDBD@D@@?BBDFDBBDDDBDBDBBBFBBBDBF@@BBBDBBFFBDBBDD@@BB@DDF@D@DBHBDBD??DB@@DBBBBDDD@@BDDHBFBD@BBB@D@BDB?F?@@B@BBBDB?D@J?BBD@@BF@@DFFBBBDDBBBD@BBF@B@BDD@@@BBB?FAFAB?D?@BF?@@@DCFCBCBE@ABE@AF?BB?B@DBFBL@F@H?D@D@D@HBFBHBFBH@D@F@@?D@BDDDB@@BB@?@B@@?F?D@F?F@D@HAF?@?F?DAF@D?@?F?@?D?D?F?DBHBFDHDHBF@F@D?F?@CFCDAFADADC@A@A@@BBBHBJBD@DDBDBBBDBDBDFJBDBFBH@F@HBF@@BDBBDF@@@BDDBFDFBF@@@@DD@BBDDBBBDDBDDDBDDD@DBDBDDDBD@@DD@@DB@@BBBBDDDD@BBB@DBDBFBDBD@FBFBD@F@F@DDFDB@@BD@B@B@HBDBBBDBBBDBBFFBDDFBD@DDHBBBDBD@BDDBFBBDDBDDBDDDBFB@@BBB@DB?@BBBDDFBD@@DD@@BBDDDDBDBDDDB@B@BBFHDHDDDBBBFB@@BDBBBD@@DD@@BB@@BDFFDBFBD@BBBDBDBFBFDDBBDDFBFBDFFHBD@BB?@??C@A@AD?BDBDBD@BB@@@BB@@@AB?B?B@@@DB@DBF@B?@ADA@ADAB?B?@?@A@A?A?A?AACA??A?A??AB?@AFEFA@A@?@ADTBTBV@TC?A@CH?@?BABA@A?A?A?EBA@?@ABAFA@ADABC@C?A?G?A?G@A?EBA@CF?H@F?D?FAD?D?D?D?F?D@F@D@FBH@DBHBBFFBFBDBH?D@D?D@FADAFADADCD?DCFA@CDA@C@EBA@EB?@ADADCDABCDCDEDCBIPCFA@CD??CBCBCFA@AFED??GBA?C@ABEFCDA@CBCDGHEBCFC@ABCBCB?@ADCDCDCDCBABABA@A@?@A?A@A@EDA?EBC@E@CBEBCDA@CDCBEDCDCDEDGDEFEDEFCDEFCHCDCDCDCDCBEFEFAFCDCFEDCDCBCDEBA@CBCDCBCFA@CBCDEDEHABEBCDEDCDGHEHEDAFEFCFEFEDEDCBE@C?A@CDCBCDCFGHABGHCDEBCDEFCDCDEBEDEBA@EDA@EDCDEFA@CDADAFCD?@CFABABEFABC@EDC@CBCDGHCDA@EDA@CDA@CFCDABCDCB??@?@ABCFEDEFEDCDCDCBCBCBEDCDCBE@A@A@C?C@E@EBCBE@CDE?CBE@CBC@CBE?ABEDADAFAF?DAF?F@F?FADE?C@E?C@CDKDGFGDGDEBCBCDEBEBCBCBCDE@CDCBEBEBEDCBEBG@ABG?ABE@CBE?C@E?A@E?ADEB?DEBADE??DG@CBC@ABCDA@C@ABA@CBABABA@?DA@ABA@ADA@?FC@ABE@ABE?ADCBEBGBE@EBEBEBCBEBCBE@ABCBADC@A@C@C?E?C@A@EA?@AdDuF@ABA?AB???@?@A@A@E?A@C?A@A?A@ABG@ADCFC@AFC@AB?@CAE?AAA?CBC?ABABC?ECGAACECECCECCGAG?E?G?AAE?GAG?EAG?EAG?G?G?G?E?M?G?G?I?E@G?E@K@EDE@?@?@ABC@ADC@ADE@ADE??DC@ADCD?B?B?BEAGAECEAEACGGCCECGEEEGECGCEEGACEEEGCCCECECECEEGAAECAAAACCEG?G@C@G@I@C?CAG?A@E?AECC@GAA?ECECEICCCCEE?AC?AAC?AAA?A?CAKGAEAGCICCCECACACCAG?A@EDMBC@ABC@A@GBIBCBABA@AF@B?B@FADG@GBC@?BE@CFGFKDA@?@?BABCBCDEBA@AB?HUDIBEBEACC?E?AB@BB@B?FC@AFEDABABABE?EBE@G@C@EBG@G@EAE?A?G?A?I@C?C@E?EBEBCDE@CBE@E@EBGBI@C@C@EBCBCDC@ABE?ADC?ABE@ADI@CBEDK@E@GBIBO@GBI@E@I?G@G?C?ABMBK@E?G?E?EBE@E@E?A?IAA@E@G@GBI?C@CFGDCBE@C@A?@B@?@@D?@?D?BCBA?A?AC?A@A??@??AAE?AEEA?@AB?B?F@@@J?F?D?D?D@D@F?F?HEHCHCDADCDADABABCDEHIDCFCFA@?HC@ADCDABCDABCDGBEFGDEBEDGDC@AFG@A@ADEDCBGFI@E?C@E@EDEDE@ADA?AFC@AFCDCBEBEBGBCDEFEBA@?FC@ADCDADEDADCDA@AB?DADCDCBCDC@ABC@ABE@ABEDCDEFEFCHEDCDCBCBCBCDGHGHEFGBADEBCDCDA@?DAFCDC@ADCDE@?@?BGnBwHACAAAA?C?A??AAAAAAA?A?A?AA?A?CAA?AACEAC?AAA?AAAAAAAACCAACEA?AAAAA?AC??AC???A??AA??CCA?ECAAECA?EEAACCCEEE?ACEAGCCAAEEAACCEEECEAGACAGCCCEACCAAEAAACAACECACCAC?A?ECAAAEGMCCCCCCGEAAACCCAAAAECEEAAEECECGAACCAACCAAEAAACAAAECA?C?E@CBA@?BADA@AD?BCDCDC@EF?D?@CDABCB?D@BAF?FAHGHAFEFCBC@M?EDAD?DEDA@CBCDEDA@CDMDCB?@C@A@GBA?EBEBCBEBCBADED?@AF?@GFE@C@EDG@A@GBGDEBA@C@EBEBEBA?EBA?GDQEO@EAA?@?A@@?@?mFRC?C@E@G?E@E?G?I?E?C@E?A?E@A?C?C?E?A?C?C?E?E@E@E?G?A?E@C?E?E?I?IAG?G?CAC?G?A?G@E?I@E@E@E?GAC?E?GAC?EAG?G?E@G?G?EAE?C?EAIAGAG?G?E?I?E?E@GAG?I?GAE?GAE?GCCAGAECGCEAGAAAEAAAGAA?ECA?GACAEAAAEAGAEACCEAGCECAAEGACACCECEEGAAEECCAECCACEEAEEEACCCCECCEEACEGCEAECEAACECGAACCCEAECG?ACEEGAEEGACAAAECEACAECGCCCGCECGAAAECKAEACCGCGCKAG?CAIAEAEACAGAA?AACAA?CAEAGAC?EAE?AAG?CAG?A?EAG?GAEAG?G?E?G@E@K@E?E@E@EBE@G?E?G@G@G@E@E@G?G@E@G@G@E@GBE@E@E?G@K@CAG@C?C?E?E@E@G?EBE?E@G?GAE?E@G?I@G@G?I@I@I@E@G?CBK@E?E?I@C?E@G?G?K?CACAECEAECEAEAGAEAIAEAECGCGAECEEICEEGCEEEEEAECIAEAIAGAKAEAGEICGEGCGCECGEGEIEG',
    startDate: '2021-03-21T10:49:15Z',
    startPosition: {
      lat: -23.195735,
      lng: -45.893883,
    },
    time: {
      elapsed: 2637,
    },
    type: 'Run',
  },
]

export default jords
