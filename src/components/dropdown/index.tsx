import React, {useEffect, useState} from "react";
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import colors from "../../theme/colors";
import {useTheme} from "../../theme";
import sizes from "../../theme/sizes";
import {DropdownItemProps, DropdownItemType, DropdownProps} from "./type";

const BASE_IMAGE_URL = "https://res.cloudinary.com/dng7cvpds/image/upload/v1679211841/flags";

const Dropdown = ({triggerComponent, options, selected, onSelect}: DropdownProps) => {
  const theme = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItemType>();

  useEffect(() => {
    setSelectedItem(selected);
    if (onSelect) {
      onSelect(selected);
    }
  }, [selected]);

  const DropdownItem = ({itemKey, label, image}: DropdownItemProps) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (onSelect) {
            onSelect({key: itemKey, label, image});
          }
          setSelectedItem({key: itemKey, label, image});
          setModalVisible(false);
        }}>
        <View style={[
          styles.dropdownItem, {
            backgroundColor: itemKey === selectedItem?.key ? colors.brand.primary : "transparent",
          }]}>
          {image && <Image
            style={styles.dropdownImage}
            source={{uri: `${BASE_IMAGE_URL}/${image}`}}
          />}
          <Text style={{
            fontSize: sizes.text.md,
            color: itemKey === selectedItem?.key ? colors.mono.white : colors.mono.black,
          }}>{label}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (<View>
    <Pressable
      onPress={() => setModalVisible(true)}>
      {triggerComponent}
    </Pressable>
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      collapsable
    >
      <TouchableWithoutFeedback onPress={() => {
        setModalVisible(false);
      }}>
        <View style={styles.modalOverlay}/>
      </TouchableWithoutFeedback>

      <View style={{
        height: "50%",
        marginTop: "auto",
        backgroundColor: theme.background,
        borderRadius: sizes.borderRadius.lg,
        paddingVertical: sizes.spacing.lg

      }}>
        <FlatList
          data={options}
          ItemSeparatorComponent={(({highlighted}) => (
            <View
              style={[styles.separator, highlighted && {marginLeft: 0}]}
            />
          ))
          }
          renderItem={({item}) => (<DropdownItem itemKey={item.key} label={item.label} image={item.image}/>)}
          keyExtractor={item => item.key}
          extraData={selectedItem}
        />

      </View>
    </Modal>
  </View>);
};

export default Dropdown;
const styles = StyleSheet.create({

  content: {
    padding: sizes.spacing.md,
    borderRadius: sizes.borderRadius.sm,
  },
  arrow: {
    borderTopColor: "transparent",
  },
  background: {
    backgroundColor: colors.mono.blackOpacity,
  },

  modalOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.mono.blackOpacity

  },
  dropdownItem: {
    flexDirection: "row",
    paddingHorizontal: sizes.spacing.lg,
    paddingVertical: sizes.spacing.md,
    gap: sizes.spacing.md,
  },
  dropdownImage: {
    width: 35,
    height: 20
  },
  separator: {
    borderWidth: 1,
    borderColor: colors.mono.blackOpacity,
  }
});
