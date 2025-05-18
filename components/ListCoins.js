import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'

const ListCoins = () => {
  return (
    <TouchableOpacity>
    <View style={styles.CoinsWrapper}>
        {/* Left Side */}
      <View style={styles.LeftWrapper}>
        <Image source={{uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AEthereum_logo_translucent.svg&psig=AOvVaw3HJDB5ulWXsRvum_-9UeuS&ust=1646499794014000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOD2tPP3rPYCFQAAAAAdAAAAABAI"}} 
        style={styles.Imagee}>
        </Image>
        <View style={styles.titleWrapper}>
            <Text style={styles.title}>Ethereum</Text>
            <Text style={styles.acro}>ETH</Text>
        </View>
      </View>

      {/* Right Side */}
      <View style={styles.RightWrapper}>
          <Text style={styles.title}>Ethereum</Text>
          <Text style={[styles.subtitle,
                        {color:'red'}
                    ]}>ETH</Text>
      </View>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    CoinsWrapper:{
        paddingHorizontal: 16,
        marginTop: 24,
    },
    LeftWrapper:{

    },
    Imagee:{

    },
    titleWrapper:{

    },
    title:{

    },
    acro:{

    },
    RightWrapper:{

    },
    
})

export default ListCoins