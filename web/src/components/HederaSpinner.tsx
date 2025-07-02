import { Center, Flex, Spinner } from '@chakra-ui/react';
import { type ReactNode } from 'react';

interface HederaSpinnerProps {
	children?: ReactNode;
}

const transition = {
	duration: 1,
	ease: 'easeInOut',
	times: [0, 0.2, 0.5, 0.8, 1],
	repeat: Infinity,
	repeatDelay: 1,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HederaSpinner = ({ ...props }: HederaSpinnerProps) => {
	return (
		<Flex justifyContent={'center'} w='full'>
			<Center w='100%' h='100%'>
				<Spinner
					thickness='4px'
					speed='0.65s'
					emptyColor='gray.200'
					color='brand.primary200' // 或你想要的顏色
					size='xl'
				/>
			</Center>
		</Flex>
	);
};

export default HederaSpinner;
