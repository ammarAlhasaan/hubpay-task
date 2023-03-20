import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

import {Popover, usePopover} from "react-native-modal-popover";
import colors from "../../theme/colors";
import {useTheme} from "../../theme";
import sizes from "../../theme/sizes";

const Dropdown = () => {
  const theme = useTheme();

  const {
    openPopover,
    closePopover,
    popoverVisible,
    touchableRef,
    popoverAnchorRect,
  } = usePopover();
  return (<View>
    <TouchableOpacity onPress={openPopover} ref={touchableRef}>
      <Text>Just press</Text>
    </TouchableOpacity>
    <Popover
      placement="bottom"
      contentStyle={[styles.content, {backgroundColor: theme.background}]}
      arrowStyle={styles.arrow}
      backgroundStyle={styles.background}
      visible={popoverVisible}
      onClose={closePopover}
      fromRect={popoverAnchorRect}
      supportedOrientations={["portrait", "landscape"]}>
      <Text>Hello from inside popover!</Text>
    </Popover>
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
});
