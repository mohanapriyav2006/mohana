import React, { useRef} from 'react';
import { TextInput, Button, View} from 'react-native';

export default function InputFocus() {
    const inputRef = useRef<TextInput>(null);

    const focusInput = () => {
        inputRef.current?.focus();
    };

    return (
        <View>
         <TextInput ref={inputRef} placeholder="Type here" />
         <Button title="focus Input" onPress={focusInput} />
         </View>

    );
}