# ObjectRenderer
Dynamically convert objects to arrays

# Usage (Example for Vue.JS)

import { ObjectHelper } from '@/scripts/parseObject';

ObjectHelper.parseObject(this.technical, this.setTechnical);

setTechnical(value) {
  this.technicalData = value;
}

<v-row v-for="(element, index) in technicalData" :key="'technical-' + index">
  <v-col cols="12" sm="5" md="5" style="font-weight: bold;">
    {{ $t('technical.' + element.key) }}
  </v-col>
  <v-col cols="12" sm="7" md="7">
    {{ element.value }}
  </v-col>
</v-row>

# Details

The method parseObjects expects an object as first input. Second input is a callback function.
The callback function sets the variables into the vue file in scripts part.
parseObject works with Promises.

The result is an multidimensional array. Each array contains the key and value:
[ 0: [ "key": "ObjectKeyName", "value": "ObjectKeyValue" ] ]
