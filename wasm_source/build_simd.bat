@em++ -std=c++17 -O3 ^
	-DLODEPNG_NO_COMPILE_ENCODER ^
	-DLODEPNG_NO_COMPILE_DISK ^
	-DLODEPNG_NO_COMPILE_ERROR_TEXT ^
	-DNDEBUG ^
	-s TOTAL_MEMORY=8MB ^
	-s ALLOW_MEMORY_GROWTH=1 ^
	-msimd128 ^
	-o ../scripts_files/wrapper_simd.wasm ^
	-I ./zstd/lib/ ^
	lz4.cc ^
	exports.cc ^
	vhcg.cc ^
	vmatrix.cc ^
	image_utils.cc ^
	world_sim.cc ^
	valve_s3tc.cc ^
	lodepng/lodepng.cpp ^
	nanort/nanort.cc ^
	meshoptimizer/src/allocator.cpp ^
	meshoptimizer/src/clusterizer.cpp ^
	meshoptimizer/src/indexcodec.cpp ^
	meshoptimizer/src/indexgenerator.cpp ^
	meshoptimizer/src/overdrawanalyzer.cpp ^
	meshoptimizer/src/overdrawoptimizer.cpp ^
	meshoptimizer/src/simplifier.cpp ^
	meshoptimizer/src/spatialorder.cpp ^
	meshoptimizer/src/stripifier.cpp ^
	meshoptimizer/src/vcacheanalyzer.cpp ^
	meshoptimizer/src/vcacheoptimizer.cpp ^
	meshoptimizer/src/vertexcodec.cpp ^
	meshoptimizer/src/vertexfilter.cpp ^
	meshoptimizer/src/vfetchanalyzer.cpp ^
	meshoptimizer/src/vfetchoptimizer.cpp