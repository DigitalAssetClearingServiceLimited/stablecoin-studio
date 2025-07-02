import { Center, Flex, Spinner } from '@chakra-ui/react';
import { type ReactNode } from 'react';

interface HederaSpinnerProps {
	children?: ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HederaSpinner = ({ ...props }: HederaSpinnerProps) => {
	return (
		<Flex justifyContent={'center'} w='full'>
			<Center w='100%' h='100%'>
				<Spinner
					thickness='4px'
					speed='0.65s'
					emptyColor='gray.200'
					color='brand.primary' // 或你想要的顏色
					size='xl'
				/>
			</Center>
		</Flex>
	);
};

export default HederaSpinner;
