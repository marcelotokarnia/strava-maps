#!/bin/bash

find ./src -regex '.*\.stories\.tsx$' | while read line; do
  NAME=${line/.*\//./}
  NAME=${NAME/.tsx/}
  DEEP="${line//[^\/]}"
  DEEP="${#DEEP}"
  if [ $DEEP -eq 2 ]
  then
    PREFIX="./"
  else
    PREFIX=""
    while [ $DEEP -gt 2 ]
    do 
      PREFIX="$PREFIX../"
      DEEP=$[$DEEP-1]
    done
  fi
  echo "${line/.stories.tsx/.spec.ts}"
  echo "// THIS FILE IS AUTOGENERATED; DO NOT EDIT MANUALLY
import * as tests from '$NAME'
import snapshotStorybook from '${PREFIX}utils/snapshotStorybook'

snapshotStorybook(tests)" >  "${line/.stories.tsx/.spec.ts}"
done