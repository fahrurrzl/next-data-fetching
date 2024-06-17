import { useProducts } from "@/features/product/useProducts";
import {
  Container,
  Heading,
  Spinner,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const Products = () => {
  const { data: products, isLoading } = useProducts();

  const renderProducts = () => {
    return products.map((product) => {
      return (
        <Tr key={product.id}>
          <Td>{product.id}</Td>
          <Td>{product.name}</Td>
          <Td>{product.price}</Td>
          <Td>{product.description}</Td>
          <Td>{product.image}</Td>
        </Tr>
      );
    });
  };
  return (
    <>
      <Container>
        <Heading>Product Lists</Heading>

        <Table>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Price</Th>
              <Th>Description</Th>
              <Th>Image</Th>
            </Tr>
          </Thead>
          <Tbody>
            {renderProducts()}
            {isLoading && <Spinner />}
          </Tbody>
        </Table>
      </Container>
    </>
  );
};

export default Products;
